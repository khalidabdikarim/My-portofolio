import React from "react";


function Chat() {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${+252615803731}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-3 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
            <button onClick={handleWhatsAppClick}>
                <ion-icon name="chatbubble-ellipses-outline" class="h-8 w-8 text-white-500"></ion-icon>
              </button>
      <button  onClick={handleWhatsAppClick}></button>
    </div>
  );
}

export default Chat;
