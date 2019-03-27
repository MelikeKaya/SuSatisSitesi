using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SusiSu.Enums
{
    public class Enums
    {
        public enum Tur
        {
            Cam,
            Plastik
        }
        public enum Boy
        {
            /*0,5 ,1.5 ,19 ,5*/
            [Display(Name = "0,5 L")]
            [Description("0,5 L")]
            Kucuk,
            [Display(Name = "1,5 L")]
            [Description("1,5 L")]
            Orta,
            [Display(Name = "5 L")]
            [Description("5 L")]
            Buyuk,
            [Display(Name = "19L")]
            [Description("19 L")]
            Damacana
            

        }
    }
}