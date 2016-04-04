using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using MoviesManyToMany.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MoviesManyToMany.Controllers
{
    [Route("api/[controller]")]
    public class MoviesController : Controller
    {
        private ApplicationDbContext _db;

        public MoviesController(ApplicationDbContext db)
        {
            this._db = db;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            var actors = _db.Movies.Select(m => new {
                MovieId = m.Id,
                Title = m.Title,
                Actor = m.MovieActors.Select(ma => ma.Actor).ToList()
            }).ToList();

            return Ok(actors);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost("{id}")]
        public IActionResult PostActor(int id, [FromBody]Actor actor)
        {
            if (ModelState.IsValid)
            {
                _db.Actors.Add(actor);
                _db.SaveChanges();

                _db.MovieActors.Add(new MovieActor
                {
                    MovieId = id,
                    ActorId = actor.Id
                });
                _db.SaveChanges();

                return Ok();
            } else
            {
                return HttpBadRequest(ModelState);
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
