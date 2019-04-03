using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ControlsAndScaffoldingTemplates.Controllers
{
    public class DisplayControlsController : Controller
    {
        // GET: DisplayControls
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult StepProgressBar()
        {
            return View();
        }
        public ActionResult CheckBoxes()
        {
            return View();
        }
        public ActionResult SliderBar()
        {
            return View();
        }

    }
}