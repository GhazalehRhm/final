// eslint-disable-next-line react/prop-types
const Basket = ({ card, onCard }) => {
  function handleRemove(item) {
    let oldItem = card.filter((i) => i.id === item.id)[0];
    let arr = card.filter((i) => i.id != item.id);
    oldItem.quantity--;
    if( oldItem.quantity === 0){
      onCard([...arr])
    }else  onCard([...arr, oldItem])
  }

  return (
    <>
      {card.length > 0 ? (
        card.map((item) => (
          <div
            key={item}
            className="w-[750px] mt-5 mx-auto flex md:items-center max-md:flex-col bg-[rgb(15, 19, 28)] border-2 border-blue-600 px-8 py-4 min-h-[100px] rounded-xl shadow-xl font-[sans-serif]"
          >
            <img src={item.image} className="h-[80px] w-auto me-5 " />
            <p className="text-white me-5 flex-1">{item.title}</p>
            <div className="max-md:mt-6">
              <button className="relative flex h-[50px] w-[90px] items-center justify-center overflow-hidden  bg-[rgb(15, 19, 28)] font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 rounded-md before:border-[rgb(15, 19, 28)] before:duration-100 before:ease-linear hover:bg-blue-600">
                <span className="relative z-10">continue</span>
              </button>
            </div>
            <div className="max-md:mt-6">
              <button
                onClick={() => handleRemove(item)}
                className="relative flex h-[50px] w-[90px] items-center justify-center overflow-hidden  bg-[rgb(15, 19, 28)] font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 rounded-md before:border-[rgb(15, 19, 28)] before:duration-100 before:ease-linear hover:bg-blue-600"
              >
                <span className="relative z-10">delete</span>
              </button>
            </div>
            <p className="text-white m-5">{item.quantity}</p>
          </div>
        ))
      ) : (
        <p className="text-white max-w-4xl mt-5 mx-auto flex md:items-center max-md:flex-col px-8 py-4 min-h-[100px]">
          List is Empty!
        </p>
      )}
    </>
  );
};

export default Basket;
