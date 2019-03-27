using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SusiSu.Models
{
    public class Siparis
    {
        public int ID { get; set; }
        public DateTime? SiparisTarihi { get; set; }
        public virtual IEnumerable<SiparisDetay> SiparisDetays { get; set; }
        public virtual User User { get; set; }
    }
}