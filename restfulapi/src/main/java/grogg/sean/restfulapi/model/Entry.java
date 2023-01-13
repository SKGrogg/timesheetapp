package grogg.sean.restfulapi.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "entry")
public class Entry {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "date")
    @JsonProperty
    private String date;
    @Column(name = "client")
    @JsonProperty
    private String client;
    @Column(name = "project")
    @JsonProperty
    private String project;
    @Column(name = "projectCode")
    @JsonProperty
    private String projectCode;
    @Column(name = "hours")
    @JsonProperty
    private double hours;
    @Column(name = "billable")
    @JsonProperty
    private boolean billable;
    @Column(name = "rate")
    @JsonProperty
    private int rate;
    @Column(name = "billableHours")
    @JsonProperty
    private double billableHours;
    @Column(name = "billableAmount")
    @JsonProperty
    private double billableAmount;
    @Column(name = "firstName")
    @JsonProperty
    private String firstName;
    @Column(name = "lastName")
    @JsonProperty
    private String lastName;


    public Entry() {

    }

    @JsonCreator
    public Entry(String date, String client, String project, String projectCode,
                 double hours, boolean billable, int rate, String firstName, String lastName) {
        this.date = date;
        this.client = client;
        this.project = project;
        this.projectCode = projectCode;
        this.hours = hours;
        this.rate = rate;
        this.firstName = firstName;
        this.lastName = lastName;
        this.billable = billable;

        if (billable) {
            this.billableHours = this.hours;
        } else {
            this.billableHours = 0.0;
        }

        this.billableAmount = this.billableHours * rate;
    }

}
