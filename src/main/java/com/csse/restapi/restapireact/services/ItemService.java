package com.csse.restapi.restapireact.services;

import com.csse.restapi.restapireact.entities.Items;

import java.util.List;

public interface ItemService {

    List<Items> getAllItems();
    Items addItem(Items item);

}
