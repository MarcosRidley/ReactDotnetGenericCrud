using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenericFullstackApp.Models.Common.Interface
{
    public interface IResponseResult
    {
        /// <summary>
        /// Returns if the request was successful.
        /// </summary>
        bool Success { get; }

        /// <summary>
        /// Returns if the request ErrorMessages are warnings only.
        /// </summary>
        bool IsWarning { get; set; }

        /// <summary>
        /// Error messages for this request.
        /// </summary>
        ICollection<string> ErrorMessages { get; set; }

        /// <summary>
        /// Add error to error messages 
        /// </summary>
        /// <param name="errorText">The error text</param>
        void AddError(string errorText);

        /// <summary>
        /// Returns if there should be a toast on client side
        /// </summary>
        bool ShouldToast { get; set; }
    }
}
