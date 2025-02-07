import React from "react";

// Importar los logotipos de los métodos de pago
import visaLogo from "../assets/payment/visa.svg";
import mastercardLogo from "../assets/payment/mastercard.svg";
import amexLogo from "../assets/payment/amex.svg";
import bcpLogo from "../assets/payment/bcp.svg";
import interbankLogo from "../assets/payment/interbank.svg";
import yapeLogo from "../assets/payment/yape.svg";
import plinLogo from "../assets/payment/plin.svg";
import izipayLogo from "../assets/payment/izipay.svg";

function PaymentBanner() {
  return (
    <section className="bg-[#fefefe] py-4">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-[#2d365d] text-2xl font-semibold mb-6 text-center">
          Métodos de Pago y Bancos
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <img src={visaLogo} alt="Visa" className="w-20 h-auto" />
          <img src={mastercardLogo} alt="Mastercard" className="w-20 h-auto" />
          <img src={amexLogo} alt="American Express" className="w-20 h-auto" />
          <img src={bcpLogo} alt="Banco BCP" className="w-20 h-auto" />
          <img src={interbankLogo} alt="Interbank" className="w-20 h-auto" />
          <img src={yapeLogo} alt="Yape" className="w-20 h-auto" />
          <img src={plinLogo} alt="Plin" className="w-20 h-auto" />
          <img src={izipayLogo} alt="Izipay" className="w-20 h-auto" />
        </div>
      </div>
    </section>
  );
}

export default PaymentBanner;
