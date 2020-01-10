package codegym.airbnb.web.controller;

import codegym.airbnb.dao.dto.BookingDTO;
import codegym.airbnb.services.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("")
    public ResponseEntity<BookingDTO> createHouse(@RequestBody BookingDTO bookingDTO) {
        System.out.println(bookingDTO.getFullName());
        bookingService.save(bookingDTO);
        return ResponseEntity.ok(bookingDTO);
    }
    @PutMapping("cancelRent/{id}")
    public ResponseEntity<?> cancelRent(@PathVariable("id")Integer id,@RequestBody BookingDTO bookingDTO) {
        if(bookingService.cancelRent(id)){
            return ResponseEntity.ok(id);
        }
        return null;
    }
}
