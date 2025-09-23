import React from 'react'

const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-16 bg-gray-100 flex items-center justify-center"
    >
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-8xl mx-auto p-4">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <img
              src="./img/ecomm.jpeg.jpg"
              alt="Project 1"
              className="rounded-lg mb-4 w-full h-56 object-cover"
            />
            <h2 className="text-1xl font-semibold mb-2">Project 1</h2>
            <p className="text-gray-700 mb-4">Ecommerce Website</p>
            <a
              href="https://github.com/Sonika21-rastogi/WebsiteEcom"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <img
              src="./img/blog.jpg"
              alt="Project 2"
              className="rounded-lg mb-4 w-full h-56 object-cover"
            />
            <h2 className="text-1xl font-semibold mb-2">Project 2</h2>
            <p className="text-gray-700 mb-4">Blog App</p>
            <a
              href="https://github.com/Sonika21-rastogi/blogapp"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            Project 3
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <img
              src="./img/image.png"
              alt="Project 2"
              className="rounded-lg mb-4 w-full h-56 object-cover"
            />
            <h2 className="text-1xl font-semibold mb-2">Project 3</h2>
            <p className="text-gray-700 mb-4">iNoteBook</p>
            <a
              href="https://i-notebook-frontend-ebon.vercel.app/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
           Live Project
            </a>
</div>
            {/* <div className="card" style={{ width: "18rem" }}>


  <img src="./img/image.png" className="card-img-top" alt="Project 4"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="https://i-notebook-frontend-ebon.vercel.app/" className="btn btn-primary">Go somewhere</a>
  </div>

                 </div>        */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects
