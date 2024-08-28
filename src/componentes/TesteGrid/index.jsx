function TesteGrid() {
  return (
    <>
      <div className="container-fluid mt-3">
        <h1>Grid Medio</h1>
        <p>
          O exemplo a seguir resultará em uma divisão de 25%/75% em dispositivos pequenos
          e uma divisão de 50%/50% em dispositivos médios (e grandes, xgrande, xxgrande). Sobre
          dispositivos extra pequenos, ele empilhará automaticamente (100%).
        </p>
        <p>Resize the browser window to see the effect.</p>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-6 bg-primary text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="col-sm-9 col-md-6 bg-dark text-white">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TesteGrid;
