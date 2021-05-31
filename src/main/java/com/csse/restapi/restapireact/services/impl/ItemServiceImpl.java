package com.csse.restapi.restapireact.services.impl;

import com.csse.restapi.restapireact.entities.Items;
import com.csse.restapi.restapireact.repositories.ItemRepository;
import com.csse.restapi.restapireact.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Override
    public List<Items> getAllItems() {
        return itemRepository.findAll();
    }

    @Override
    public Items addItem(Items item) {
        return itemRepository.save(item);
    }
}
