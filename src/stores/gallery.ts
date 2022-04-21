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
