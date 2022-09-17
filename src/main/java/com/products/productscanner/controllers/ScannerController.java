package com.products.productscanner.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ScannerController {

    @GetMapping("/")
    @ResponseBody
    public String landingHTML(){
        return "<h1>WELCOME TO THE SCANNER PROJECT!</h1>";
    }

    @GetMapping("/scanner")
    public String helloHTML(){
        return "index";
    }


}
