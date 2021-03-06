package com.justandreyb.liquid_recipes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.val;

import com.justandreyb.liquid_recipes.entity.Manufacturer;
import com.justandreyb.liquid_recipes.repository.ManufacturerRepository;

@Service
public class ManufacturerService extends EntityService<Manufacturer, ManufacturerRepository> {

    @Autowired
    private FlavorService flavorService;

    public Manufacturer getByFlavor(String id) {
        val manufacturer = flavorService.get(id).getManufacturer();
        checkEntity(manufacturer);

        return manufacturer;
    }

    public Iterable<Manufacturer> getAllManufacturers() {
        return repository.findAll();
    }

}
