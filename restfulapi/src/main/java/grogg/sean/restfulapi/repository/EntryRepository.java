package grogg.sean.restfulapi.repository;

import grogg.sean.restfulapi.model.Entry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EntryRepository extends JpaRepository<Entry, Long> {
}
