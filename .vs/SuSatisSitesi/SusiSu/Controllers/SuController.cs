using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using SusiSu.Models;

namespace SusiSu.Controllers
{
    public class SuController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Su
        public ActionResult Index()
        {
            return View(db.Su.ToList());
        }

        public ActionResult Listele()
        {

            var result = (from a in db.Su
                          group a by new { a.Boy, a.Tur }
             into grp
                          select new ListeleViewModel()
                          {
                            Boy=  grp.Key.Boy,
                            Tur= grp.Key.Tur,
                            Quantity = grp.Sum(t => t.StokMiktari)
                          }).ToList();

            return View(result);
        }

        // GET: Su/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Su su = db.Su.Find(id);
            if (su == null)
            {
                return HttpNotFound();
            }
            return View(su);
        }

        // GET: Su/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Su/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,StokMiktari,Fiyat,Boy,Tur,UretimTarihi,SonKullanmaTarihi,EklenmeTarihi")] Su su)
        {
            if (ModelState.IsValid)
            {
                db.Su.Add(su);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(su);
        }

        // GET: Su/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Su su = db.Su.Find(id);
            if (su == null)
            {
                return HttpNotFound();
            }
            return View(su);
        }

        // POST: Su/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,StokMiktari,Fiyat,Boy,Tur,UretimTarihi,SonKullanmaTarihi")] Su su)
        {
            if (ModelState.IsValid)
            {
                db.Entry(su).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(su);
        }

        // GET: Su/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Su su = db.Su.Find(id);
            if (su == null)
            {
                return HttpNotFound();
            }
            return View(su);
        }

        // POST: Su/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Su su = db.Su.Find(id);
            db.Su.Remove(su);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

       

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
