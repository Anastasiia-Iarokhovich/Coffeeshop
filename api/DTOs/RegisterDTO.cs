using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs
{
    public class RegisterDTO
    {   
        [Required]
        [MaxLength(100)]
        public string? Username { get; set; }
        [Required]
        public string? Password { get; set; }
    }
}