using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using static SusiSu.Enums.Enums;

namespace SusiSu.Models
{
    public class Su
    {   [Key]
        public int Id { get; set; }
        [Required]
        [DisplayName("Stok Miktarı")]
        public int StokMiktari { get; set; }

        [Required]
        public int Fiyat { get; set; }
        [Required]
        public Boy Boy { get; set; }

        [Required]
        [DisplayName("Tür")]
        public Tur Tur { get; set; }

        [Required]

        [DataType(DataType.Date)]
        [DisplayName("Üretim Tarihi")]
        public DateTime UretimTarihi { get; set; }

        private DateTime _Sonkullanmatarihi;

        [DisplayName("Son Kullanma Tarihi")]
        public DateTime SonKullanmaTarihi
        {
            get { return this.UretimTarihi.AddYears(2); }
            set { _Sonkullanmatarihi = value; }
        }


        [DisplayName("Eklenme Tarihi")]
        public DateTime EklenmeTarihi { get; set; }= DateTime.Now;

        public virtual IEnumerable< SiparisDetay> SiparisDetay { get; set; }
    }
}