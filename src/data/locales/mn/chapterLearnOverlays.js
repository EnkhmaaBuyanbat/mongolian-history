import { chapterLearnOverlaysEraI_IIMn } from './chapterLearnOverlaysEraI-II.js'
import { chapterLearnOverlaysEraIIIMn } from './chapterLearnOverlaysEraIII.js'
import { chapterLearnOverlaysEraIVMn } from './chapterLearnOverlaysEraIV.js'
import { chapterLearnOverlaysEraVMn } from './chapterLearnOverlaysEraV.js'
import { chapterLearnOverlaysEraVIMn } from './chapterLearnOverlaysEraVI.js'
import { chapterLearnOverlaysEraVIIMn } from './chapterLearnOverlaysEraVII.js'
import { chapterLearnOverlaysEraVIIIMn } from './chapterLearnOverlaysEraVIII.js'

const q = (question, answer, confidence) => ({ question, answer, confidence })
const c = (label, text, confidence) => ({ label, text, confidence })

function mergeLearnOverlays(...groups) {
  const out = {}
  groups.forEach((group) => {
    Object.entries(group ?? {}).forEach(([chapterId, sections]) => {
      out[chapterId] = { ...out[chapterId] }
      Object.entries(sections ?? {}).forEach(([sectionId, patch]) => {
        out[chapterId][sectionId] = { ...out[chapterId][sectionId], ...patch }
      })
    })
  })
  return out
}

const turningPointQaMn = {
  'chapter-crisis-of-1260': {
    'why-crisis-matters': {
      callouts: [c('Сургалтын болгоомжлол', '“1260 онд хуваагдсан” гэх товчлол үргэлжилсэн холбоо, жигд бус бүс нутгийн хөгжлийг арилгахгүй үед л хэрэгтэй.', 'INTERPRETED')],
      questions: [
        q('1260 он хожуу Монголын түүхэнд яагаад чухал вэ?', 'Засаглалын асуудал өөрчлөгдсөн. Хубилай Аригбөхийг ялсан ч Мөнхийн үеийн улс төрийн харилцааг сэргээсэнгүй. Хожуу Юань, Жүчи, Цагаадай, Ил хааны түүхийг бүс нутгийн орднууд ба үргэлжилсэн Чингисийн угсааны холбооны холимог талбарт унших ёстой.', 'ESTABLISHED / INTERPRETED'),
      ],
    },
  },
  'chapter-after-1368-yuan-court-steppe': {
    'after-1368-why-matters': {
      questions: [
        q('Монголын түүх 1368 онд төгссөн үү?', 'Үгүй. Дадугаас гарснаар Хятадын ихэнх нутаг дахь Юань засаг төгссөн болохоос Юанийн угсааны нэхэмжлэл, Монголын улс төрийн түүх төгсөөгүй. Ордон өөрчлөгдөх төв, залгамжлалаар Цагаан хэрмийн хойно үргэлжилсэн.', 'ESTABLISHED'),
      ],
      callouts: [c('Редакцын нэршил', '“Умард Юань” нь орчин үеийн түүх судлалын хэрэгтэй нэр болохоос 1368–1635 оны турш нэг төвлөрсөн улсын баримт биш.', 'INTERPRETED')],
    },
  },
  'chapter-toward-qing-rule-1691': {
    'not-same-time': {
      questions: [
        q('Бүх монголчууд 1691 онд Чин засгийн дор орсон уу?', 'Үгүй. Өмнөд Монгол, Цахарын харилцаа эрт, өөр нөхцөлөөр хөгжсөн. 1691 оны Долон нуурын чуулган Халхын ноёдыг Кансигийн ордонтой шинэ харилцаанд албан ёсоор оруулсан. Зүүнгарын түүх 1691-ээс хойш үргэлжилсэн.', 'ESTABLISHED'),
      ],
    },
  },
  'chapter-occupation-revolution-1921': {
    'transformation-not-single-event': {
      questions: [
        q('1921 он энгийн үндэсний чөлөөлөлт байсан уу?', 'Үгүй. Хятадын эзлэн түрэмгийлэл, Унгерний оролцоо, Монголын хувьсгалч зохион байгуулалт, шийдвэрлэх Зөвлөлтийн цэргийн дэмжлэг давхацсан. Үр дүн нь цэвэр чөлөөлөлт ч биш, Монголын улс төрийн үйл ажиллагаагүй түүх ч биш.', 'ESTABLISHED / INTERPRETED'),
      ],
    },
  },
  'chapter-building-democratic-state-1990-1992': {
    'what-1992-changed': {
      questions: [
        q('Ардчилал 1990 онд бүрэн ирсэн үү?', '1990 он институцын шилжилтийг нээсэн. Үндсэн хууль боловсруулалт, сонгууль, зах зээлийн цочрол 1992 он болон түүнээс хойш үргэлжилсэн. Энэ жил дууссан очих цэг бус, үйл явцын эхлэл.', 'ESTABLISHED / INTERPRETED'),
      ],
    },
  },
  'chapter-altan-khan-buddhist-revival': {
    'not-single-revival': {
      questions: [
        q('Алтан хан 1578 онд бүх монголчуудыг шашинд оруулсан уу?', 'Үгүй. Содномжамцтай 1578 оны уулзалт, холбогдох цол нь ивээл, Буддын байгууллын тэлэлтэд чухал байв. Монгол нийгэмлэг бүрийн агшин зуурын шашин солилт биш.', 'ESTABLISHED / INTERPRETED'),
      ],
    },
  },
}

export const chapterLearnOverlaysMn = mergeLearnOverlays(
  chapterLearnOverlaysEraI_IIMn,
  chapterLearnOverlaysEraIIIMn,
  chapterLearnOverlaysEraIVMn,
  chapterLearnOverlaysEraVMn,
  chapterLearnOverlaysEraVIMn,
  chapterLearnOverlaysEraVIIMn,
  chapterLearnOverlaysEraVIIIMn,
  turningPointQaMn,
)
