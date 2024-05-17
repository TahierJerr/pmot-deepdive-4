import { useTranslations } from 'next-intl';

const Contact = () => {

  const t = useTranslations('Contact');

  return (
    <div className=" p-6">
      <div className="flex flex-col gap-4 max-w-sceen-lg">
        <div className="bg-white shadow-md rounded-md p-4 ">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <form className="">
            <div>
              <label htmlFor="name" className="block font-medium">{t("name")}</label>
              <input
                type="text" 
                id="name"
                name="name"
                placeholder={t("name")}
                required
                className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium">{t("email")}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("email")}
                required
                className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block font-medium">{t("subject")}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder={t("subject")}
                required
                className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium">{t("message")}</label>
              <textarea
                id="message"
                name="message"
                placeholder={t("message")}
                required
                className="border border-gray-300 rounded px-3 py-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
              />
            </div>
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              {t("send")}
            </button>
          </form>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
          <p>Torenstraat 13</p>
          <p>9679 BN Scheemda</p>
          <p></p>
          <p>Telephone: +31 (0)597 591596</p>
          <p>Fax: +31 (0)597 591938</p>
          <p>Email: info@pmot.nl</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
