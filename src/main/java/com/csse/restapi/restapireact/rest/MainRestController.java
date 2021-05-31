package com.csse.restapi.restapireact.rest;

import com.csse.restapi.restapireact.entities.Items;
import com.csse.restapi.restapireact.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class MainRestController {

    @Autowired
    private ItemService itemService;

    @GetMapping(value = "/allitems")
    public ResponseEntity<?> getAllItems(){
        List<Items> items = itemService.getAllItems();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @PostMapping(value = "/additem")
    public ResponseEntity<?> addItem(@RequestBody Items item){
        itemService.addItem(item);
        return ResponseEntity.ok(item);
    }

}
