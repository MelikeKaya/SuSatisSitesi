using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SusiSu.Models
{
    public class User:ApplicationUser
    {
        [Key]
        public int UserID { get; set; }
        public string Ad { get; set; }
        public string Soyad { get; set; }
        public ICollection<Siparis> Siparis { get; set; }
    }
}