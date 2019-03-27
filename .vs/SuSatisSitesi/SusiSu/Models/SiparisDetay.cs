using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SusiSu.Models
{
    public class SiparisDetay
    {
        public int ID { get; set; }
        public int Adet { get; set; }
        public int Fiyat { get; set; }
        public virtual Su Su { get; set; }
        public virtual Siparis Siparis { get; set; }
    }
}