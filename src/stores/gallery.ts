import { LANGUAGES } from "@/i18n/i18n.helper";
import { defineStore } from "pinia";

interface I18NData {
  title: string;
  briefing: string;
  description: string;
  photographer: string;
}

interface IImageData {
  id: string;
  imageURL: string;
  photographerLink: string;
  gMapsIFrameLink: string;
  i18nData: {
    [key in LANGUAGES]: I18NData;
  };
}

const arrayOfPhotosData: IImageData[] = [
  {
    id: "1",
    imageURL:
      "https://images.unsplash.com/photo-1533501747004-381b96042e88?w=870",
    photographerLink: "https://unsplash.com/@raulcachophoto",
    gMapsIFrameLink:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d809.1133611949052!2d-5.8124912!3d35.7887999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c7f4cffd34ed5%3A0x235d5ea12aa2bfe6!2sBab%20Bhar!5e0!3m2!1sfr!2sfr!4v1650786157731!5m2!1sfr!2sfr",
    i18nData: {
      [LANGUAGES.EN]: {
        title: "Bab El bhar",
        briefing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. EN",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique pariatur ducimus debitis sequi, enim, eligendi commodi exercitationem quos magni nostrum, fuga odio iure! Itaque magnam nihil quos deleniti odit rerum!",
        photographer: "Raul Cacho Oses",
      },
      [LANGUAGES.FR]: {
        title: "Bab El bhar",
        briefing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. FR",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique pariatur ducimus debitis sequi, enim, eligendi commodi exercitationem quos magni nostrum, fuga odio iure! Itaque magnam nihil quos deleniti odit rerum!",
        photographer: "Raul Cacho Oses",
      },
      [LANGUAGES.AR]: {
        title: "باب البحر",
        briefing: "أحد الأبواب التاريخية لمدينة طنجة في المغرب.",
        description:
          "أحد الأبواب التاريخية لمدينة طنجة في المغرب. يفصل باب البحر بين قصبة المدينة العتيقة والبحر شمالا.",
        photographer: "Raul Cacho Oses",
      },
    },
  },
  {
    id: "2",
    imageURL:
      "https://images.unsplash.com/photo-1633264542743-c1acdb5eff0e?w=870",
    photographerLink: "https://unsplash.com/@haykad684",
    gMapsIFrameLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4577.057953801626!2d-5.923981822987818!3d35.78842486876578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b898ab2a0afd1%3A0x1441c1d6ee2cb2bf!2sCap%20Spartel!5e0!3m2!1sfr!2sfr!4v1650788506698!5m2!1sfr!2sfr",
    i18nData: {
      [LANGUAGES.EN]: {
        title: "Cap Spartel EN",
        briefing:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. CS EN",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique pariatur ducimus debitis sequi, enim, eligendi commodi exercitationem quos magni nostrum, fuga odio iure! Itaque magnam nihil quos deleniti odit rerum!",
        photographer: "Haitam ELKADIRI",
      },
      [LANGUAGES.FR]: {
        title: "Cap Spartel FR",
        briefing:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. CS FR",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique pariatur ducimus debitis sequi, enim, eligendi commodi exercitationem quos magni nostrum, fuga odio iure! Itaque magnam nihil quos deleniti odit rerum!",
        photographer: "Haitam ELKADIRI",
      },
      [LANGUAGES.AR]: {
        title: "رأس سبارطيل",
        briefing:
          " قمة صخرية جبلية على الساحل المغربي، جنوب مدخل مضيق جبل طارق، 14 كيلومترا غرب طنجة.",
        description:
          " قمة صخرية جبلية على الساحل المغربي، جنوب مدخل مضيق جبل طارق، 14 كيلومترا غرب طنجة. يقابله رأس الطرف الأغر شمال مدخل مضيق جبل طارق، على الساحل الإسباني.",
        photographer: "هيثم القديري",
      },
    },
  },
  {
    id: "3",
    imageURL:
      "https://images.unsplash.com/photo-1641753352317-e078916ef903?w=870",
    photographerLink: "https://unsplash.com/@sediri_ayoub",
    gMapsIFrameLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.1466578714353!2d-5.811130511842426!3d35.78552919875456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c7f8ea96aeca5%3A0x2d3c3eb140aab434!2sPlace%20Petit%20Socco!5e0!3m2!1sfr!2sfr!4v1650788573231!5m2!1sfr!2sfr",
    i18nData: {
      [LANGUAGES.EN]: {
        title: "Internal Socco",
        briefing:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. CS EN",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique pariatur ducimus debitis sequi, enim, eligendi commodi exercitationem quos magni nostrum, fuga odio iure! Itaque magnam nihil quos deleniti odit rerum!",
        photographer: "Ayoub Sediri",
      },
      [LANGUAGES.FR]: {
        title: "Socco interne FR",
        briefing:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. CS FR",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique pariatur ducimus debitis sequi, enim, eligendi commodi exercitationem quos magni nostrum, fuga odio iure! Itaque magnam nihil quos deleniti odit rerum!",
        photographer: "Ayoub Sediri",
      },
      [LANGUAGES.AR]: {
        title: "سوق الداخل",
        briefing: "هي ساحة بالمدينة القديمة لطنجة في المغرب.",
        description:
          "السوق الصغير ، المعروف أيضًا باسم Petit Socco أو «سوق الدخلي» أو سوق الدخيل، هي ساحة بالمدينة القديمة لطنجة في المغرب.",
        photographer: "أيوب",
      },
    },
  },
];

export const useGalleryStore = defineStore({
  id: "gallery",
  state: () => ({
    gallery: arrayOfPhotosData,
  }),
  getters: {
    getPhotoDataByID:
      (state) =>
      (id: string): IImageData | undefined =>
        state.gallery.filter((photoData) => photoData.id === id)[0],
  },
});
