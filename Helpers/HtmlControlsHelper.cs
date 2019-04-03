using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace ControlsAndScaffoldingTemplates.Helpers
{
    public static class HtmlControlsHelper
    {

        public static string RequiredCheckBox(HtmlHelper helper)
        {
            return "string";
        }

            /// <summary>
            /// The first object in the dictionary list will be considered the main form
            /// Every Sub sequent item will be the tabs
            /// </summary>
            /// <returns></returns>
            public static string MainWindowWithTabRender(object WindowObjects)
        {

            StringBuilder HtmlString;
            bool firstOneDidntRunYet = true;
            //used to loop throughthe property information on the object and to dynamically create our windows
            Type myType = WindowObjects.GetType();
            IList<PropertyInfo> props = new List<PropertyInfo>(myType.GetProperties());
            
            foreach (PropertyInfo prop in props)
            {
                //Check to see if it's a string, and ensure it's not an ID Field
                if (prop.GetType() == typeof(string))
                {
                }
                //if it's an ID Field See what we can do here. 
                if (prop.GetType() == typeof(string))
                {
                }

                if (prop.GetType() == typeof(string))
                {
                }
                if (prop.GetType() == typeof(string))
                {
                }
                object propValue = prop.GetValue(WindowObjects, null);

                // Do something with propValue
            }



            //foreach (var windowObject in WindowObjects)
            //{
            //If it's the first one, we setup the main window
            if (firstOneDidntRunYet)
                {
                    //var a = windowObject.ModelType;

                    //var firstModelType = windowObject.ModelType;

                    //dynamic firstModelConverted = Convert.ChangeType(windowObject.ModelData, firstModelType);

                    //firstModelConverted.
                    var ab = WindowObjects.GetType().GetGenericArguments()[0];
                    var abc = WindowObjects.GetType().GetTypeInfo().GenericTypeArguments[0];


                }


            //}

            return $@"";
        }
        public static void My_Func<T>(Object input)
        {
            T ab = (T)Convert.ChangeType(input, typeof(T));
        }
        public static T ConvertExamp1<T>(object input)
        {
            return (T)Convert.ChangeType(input, typeof(T));
        }
        public class WindowObjects
        {
            public object ModelData { get; set; }
            public Type ModelType { get; set; }
        }
    }
}