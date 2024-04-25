const Header = () => {
  return (
    <div className="container-menu-header bg-black text-white w-screen h-40">
      <div className="container-title-header w-full h-full flex items-center justify-around font-semibold text-5xl">
        <div className="container-player-1 w-full h-full flex flex-col items-center justify-center">
          <p className="text-3xl">Player 1</p>
          <div className="choose border h-12 w-12 rounded-full mt-5"></div>
        </div>
        <div className="container-title w-full h-full flex flex-col items-center justify-center gap-5">
          <h1>
            <span className="text-blue-500">Tic</span>{" "}
            <span className="text-green-500">Tac</span>{" "}
            <span className="text-yellow-500"> Toc</span>
          </h1>
          <h2 className="text-red-600">[The Game]</h2>
        </div>
        <div className="container-player-2 w-full h-full flex flex-col items-center justify-center">
          <p className="text-3xl">Player 2</p>
          <div className="choose border h-12 w-12 rounded-full mt-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
