using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenericFullstackApp.Models.Entities.Base
{
    public abstract class BaseEntity
    {
        public int Id { get; set; }
        [Required]
        public bool Active { get; set; } = true;
        [Required]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        [Required]
        public DateTime LastEditedAt { get; set; } = DateTime.UtcNow;
        [Required]
        public Guid Guid { get; set; } = Guid.NewGuid();
    }
}
