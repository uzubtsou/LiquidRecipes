package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, String> {
}
