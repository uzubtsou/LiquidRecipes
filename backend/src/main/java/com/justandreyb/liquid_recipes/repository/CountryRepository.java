package com.justandreyb.liquid_recipes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.justandreyb.liquid_recipes.entity.Country;

public interface CountryRepository extends JpaRepository<Country, String> {
}
