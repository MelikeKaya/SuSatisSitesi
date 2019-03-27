using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SusiSu.Models
{
    public class SiparisViewModel
    {
        //public ICollection<Su> Su { get; set; }
        public int Adet { get; set; }
        public int Fiyat { get; set; }
        public DateTime? SiparisTarihi { get; set; }
        public string UserID { get; set; }
        public int UrunID { get; set; }
        public ICollection<Siparis> Siparis { get; set; }
        public ICollection< SiparisDetay> SiparisDetay { get; set; }
        public ICollection<User> User { get; set; }

    }
}