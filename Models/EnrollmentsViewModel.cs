using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ControlsAndScaffoldingTemplates.Models
{
    public class EnrollmentsViewModel
    {
        public IEnumerable<Enrollment> OldEnrollments { get; set; }
        public IEnumerable<Enrollment> Enrollments { get; set; }
    }
}