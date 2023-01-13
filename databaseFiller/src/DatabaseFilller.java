import java.io.*;
import java.sql.*;

public class DatabaseFilller {

    public static void main(String[] args) {
        String jdbcURL = "jdbc:mysql://localhost:3306/";
        String username = "root";
        String password = "";

        Connection connection = null;
    
        try{
            //Drop Database if it already exists
            connection = DriverManager.getConnection(jdbcURL, username, password);
            connection.setAutoCommit(false);
            Statement statement = connection.createStatement();
            String sql = "DROP DATABASE `giantmachines`";
            statement.executeUpdate(sql);
            connection.commit();

            //Create Database
            connection = DriverManager.getConnection(jdbcURL, username, password);
            connection.setAutoCommit(false);
            statement = connection.createStatement();
            sql = "CREATE DATABASE `giantmachines`";
            statement.executeUpdate(sql);
            connection.commit();
            connection.close();

            //Create table
            jdbcURL += "giantmachines";
            connection = DriverManager.getConnection(jdbcURL, username, password);
            connection.setAutoCommit(false);
            statement= connection.createStatement();
            sql = "CREATE TABLE `entry` " +
            "(id INTEGER NOT NULL AUTO_INCREMENT, " +
            " date VARCHAR(255), " +
            " client VARCHAR(255), " +
            " project VARCHAR(255), " +
            " project_code VARCHAR(255), " +
            " hours FLOAT, " +
            " billable BOOL, " +
            " rate INT, " +
            " first_name VARCHAR(255), " + 
            " last_name VARCHAR(255)," +
                    " billable_amount FLOAT, " +
                    " billable_hours FLOAT, " +
                    " PRIMARY KEY (id))";

            statement.executeUpdate(sql);
            connection.commit();
            connection.close();

            
        }catch (SQLException e){
            e.printStackTrace();

            try {
                connection.rollback();
            } catch (SQLException ex){
                e.printStackTrace();
            }
        }

        String csvFilePath = "sample_entry_data.csv";

        int batchSize = 10;

        connection = null;

        try {
            jdbcURL = "jdbc:mysql://localhost:3306/giantmachines";
            connection = DriverManager.getConnection(jdbcURL, username, password);
            connection.setAutoCommit(false);

            String sqlSyntax = "INSERT INTO entry " +
                    "(date, client, project, project_code, hours, billable, rate, first_name, last_name, billable_amount, billable_hours)" +
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement statement = connection.prepareStatement(sqlSyntax);

            BufferedReader lineReader = new BufferedReader(new FileReader(csvFilePath));
            String lineText = null;

            int count = 0;

            lineReader.readLine(); //skip header

            while ((lineText = lineReader.readLine()) != null){
                String[] data =  lineText.split(",");
                String date = data[0];
                String client = data[1];
                String project = data[2];
                String projectCode = data[3];
                double hours = Double.parseDouble(data[4]);
                String billableStr = data[5];
                boolean billable = false;
                if(billableStr.equalsIgnoreCase("yes")){
                    billable = true;
                }
                String firstName = data[6];
                String lastName = data[7];
                int rate = Integer.parseInt(data[8]);
                double billableHours = 0.0;
                if (billable) {
                    billableHours = hours;
                }
                double billableAmount = 0.0;
                if (billable) {
                    billableAmount = billableHours*rate;
                }

                statement.setString(1, date);
                statement.setString(2, client);
                statement.setString(3, project);
                statement.setString(4, projectCode);
                statement.setDouble(5, hours);
                statement.setBoolean(6, billable);
                statement.setInt(7, rate);
                statement.setString(8, firstName);
                statement.setString(9, lastName);
                statement.setDouble(10, billableAmount);
                statement.setDouble(11, billableHours);


                statement.addBatch();

                count++;

                if (count % batchSize == 0){
                    statement.executeBatch();
                }
            }

            lineReader.close();

            statement.executeBatch();
            connection.commit();
            connection.close();

        } catch (IOException e) {
            System.out.println(e);
        }catch (SQLException e){
            e.printStackTrace();

            try {
                connection.rollback();
            } catch (SQLException ex){
                e.printStackTrace();
            }
        }

    }
}
