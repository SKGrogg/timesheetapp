package grogg.sean.restfulapi.controller;

import grogg.sean.restfulapi.model.Entry;
import grogg.sean.restfulapi.repository.EntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path = "")
public class EntryController {

    @Autowired
    private EntryRepository entryRepository;

    @CrossOrigin("http://localhost:3000")
    @PostMapping(path = "/add")
    public @ResponseBody String addNewEntry(@RequestBody Entry entry) {
        entryRepository.save(entry);
        return "Entry Created";
    }

    @CrossOrigin("http://localhost:3000")
    @GetMapping(path = "/all")
    public @ResponseBody List<Entry> getAllEntries() {
        List<Entry> retList = entryRepository.findAll();
        return retList;
    }

}
