using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ControlsAndScaffoldingTemplates.Models
{
    [MetadataType(typeof(StudentMetaData))]
    public partial class Student
    {
        public List<int> initialEnrollments { get; set; }
        //public EnrollmentsViewModel enrollmentsForView { get; set; }
    }
}