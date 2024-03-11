// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.enquiry.system.Service.UserServices;

// import java.util.List;

// @AllArgsConstructor
// @RestController
// @RequestMapping("/api/admin/users")
// public class AdminUserController {

//     private UserServices userServices;

//     // Create a new user by admin
//     @PostMapping
//     public ResponseEntity<UserDTO> createUserByAdmin(@RequestBody UserDTO userDTO) {
//        UserDTO savedUser = userServices.createUserByAdmin(userDTO);
//         return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
//     }

//     // Get user by ID
//     @GetMapping("/{id}")
//     public ResponseEntity<UserDTO> getUserById(@PathVariable("id") Long userId) {
//         UserDTO userDTO = userServices.getUserById(userId);
//         return ResponseEntity.ok(userDTO);
//     }

//     // Get all users
//     @GetMapping
//     public ResponseEntity<List<UserDTO>> getAllUsers() {
//         List<UserDTO> users = userServices.getAllUsers();
//         return ResponseEntity.ok(users);
//     }

//     // Update user by admin
//     @PutMapping("/{id}")
//     public ResponseEntity<UserDTO> updateUserByAdmin(@PathVariable("id") Long userId, @RequestBody UserDTO userDTO) {
//         UserDTO updatedUser = userServices.updateUserByAdmin(userId, userDTO);
//         return ResponseEntity.ok(updatedUser);
//     }

//     // Delete user by admin
//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> deleteUserByAdmin(@PathVariable("id") Long userId) {
//         userServices.deleteUserByAdmin(userId);
//         return ResponseEntity.noContent().build();
//     }
// }
