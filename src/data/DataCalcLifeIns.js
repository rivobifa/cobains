import { DataLinkPage } from './DataLink';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';

export const DataLabel = {
  gender: 'Jenis Kelamin',
  age: 'Usia',
  product: 'Jenis Produk',
  period: 'Periode Pertanggungan',
  tbp: 'Waktu Pembayaran Manfaat',
  calc: 'Jenis Perhitungan',
  premium: 'Premi Neto',
  tsi: 'Jumlah Manfaat',
  aPremium: 'Premi dibayar cicilan',
  installment: 'Periode Cicilan',
  interest: 'Tingkat Bunga',
  mortality: 'Tabel Mortalita',
  annuity: 'Jenis Anuitas',
};

export const DataAdornment = {
  currency: 'Rp',
  year: 'Tahun',
  percentage: '%',
  period: 'x',
};

export const DataHomeCalc = {
  section: [
    {
      title: [
        {
          text: 'Hitung ',
        },
        {
          text: 'premi neto',
          type: 'bold',
        },
        {
          text: ' & ',
        },
        {
          text: 'manfaat',
          type: 'bold',
        },
        {
          text: ' hanya dengan ujung jari',
        },
      ],
      content: [
        {
          paragraph: [
            [
              {
                text: 'Untuk produk asuransi jiwa menggunakan ',
              },
              {
                text: 'asumsi neto',
                type: 'ins-term',
              },
              {
                text: ' dari formula komutasi Chester Wallace Jr. Jordan.',
              },
            ],
          ],
        },
      ],
      button: {
        regular: 'Mulai Sekarang',
        complementary: 'Pelajari',
        pathRegular: DataLinkPage.calc_lifeIns_input,
      },
    },
    {
      title: [
        {
          text: 'Eksperimen sepuasnya',
        },
      ],
      content: [
        {
          paragraph: [
            [
              {
                text: 'Gak pake lama, gak bikin pusing.',
              },
            ],
          ],
        },
      ],
    },
    {
      title: [
        {
          text: 'Buat ',
        },
        {
          text: 'tabel mortalita',
          type: 'bold',
        },
        {
          text: ' sendiri',
        },
      ],
      content: [
        {
          paragraph: [
            [
              {
                text: 'Standarisasi bukan halangan untuk mencoba hal baru. Susun tabel dan jangan khawatir kebingungan. Kami menyediakan ',
              },
              {
                text: 'template',
                type: 'italic',
              },
              {
                text: ' yang mungkin kamu butuhkan.',
              },
            ],
          ],
        },
      ],
      button: {
        regular: 'Buat Tabel',
        pathRegular: DataLinkPage.calc_lifeIns_input,
      },
    },
  ],
  card: [
    {
      icon: <MdIcons.MdMoneyOff />,
      title: 'Gratis',
      desc: 'Tidak perlu membuka dompet.',
    },
    {
      icon: <BiIcons.BiTimer />,
      title: 'Dibawah 2 detik',
      desc: 'Proses cepat, tidak sampai dua detik.',
    },
    {
      icon: <BiIcons.BiSelectMultiple />,
      title: 'Multi Opsi',
      desc: 'Hadir dalam pillihan input yang bervariasi.',
    },
    {
      icon: <MdIcons.MdOutlineTimeline />,
      title: 'Visualisasi Data',
      desc: 'Pertimbangan lebih baik dan mudah dipahami.',
    },
    {
      icon: <AiIcons.AiOutlineBorderlessTable />,
      title: 'Tabulasi Pilihan',
      desc: 'Tabel sesuai keinginan dan kebutuhan.',
    },
  ],
};

export const DataResultCalc = {
  path: DataLinkPage.calc_lifeIns_input,
  findPremium: {
    title: 'Nilai Premi Neto',
    subTitle: 'Yang harus dibayar untuk produk',
  },
  findTsi: {
    title: 'Total Jumlah Manfaat',
    subTitle: 'Yang dapat diterima untuk produk',
  },
  toggleButton: {
    table: 'Tampilkan tabel',
    chart: 'Tampilkan grafik',
  },
  card: {
    installmentText: 'Bayar',
    buttonCard: {
      detailButton: 'Lihat Detail',
      closeButton: 'Tutup',
      add: 'Gunakan cicilan',
    },
  },
  summary: {
    title: 'Ringkasan Input',
    subTitle: 'Berdasarkan yang apa yang kamu input sebelumnya.',
    table: {
      header: ['Jenis Input', 'Opsi Yang Dipilih'],
      content: DataLabel,
    },
  },
  interest: {
    title: 'Bunga',
    subTitle: {
      user: ['Berdasarkan', 'User Input Interest'],
      bi7drr: ['Berdasarkan rataan 36 bulan', 'BI7DRR'],
    },
    table: {
      header: ['Notasi', 'Nilai'],
      content: ['Tingkat Bunga', 'Faktor Diskonto', 'Force of Interest'],
    },
  },
  bi7drr: {
    title: 'BI7DRR',
    subTitle: 'BI 7-Day (Reverse) Repo Rate',
    table: {
      header: ['Tanggal', 'Nilai', 'URL'],
    },
  },
  chart: {
    title: 'Perbandingan Mortalita',
    subTitle: 'Jenis Kelamin:',
  },
  commutation: {
    title: 'Nilai Komutasi',
    subTitle: ['Usia', 'Periode pertanggungan', 'dan Periode cicilan'],
    table: {
      header: ['Usia', 'p', 'q', 'l', 'd', 'D', 'N', 'S', 'C', 'M', 'R'],
    },
  },
  link: {
    title: 'Coba eksperimen lagi?',
    subTitle: {
      advEnable: 'Cepat, mudah, ga bikin pusing',
      advDisable:
        'Tampilkan opsi lanjutan untuk memperoleh hasil yang lebih spesifik',
    },
    goCalc: {
      text: 'Coba Lagi',
      path: DataLinkPage.calc_lifeIns_input,
    },
    goEdu: {
      text: 'Pelajari Asuransi',
      path: DataLinkPage.edu_home,
    },
  },
};

export const DataInputCalc = {
  section: [
    {
      title: [
        {
          text: 'Kalkulator Neto Asuransi Jiwa',
        },
      ],
      content: [
        {
          paragraph: [
            [
              {
                text: 'Buat asumsi neto dengan hanya ',
              },
              {
                text: '"klak-klik"',
                type: 'italic',
              },
              {
                text: ' saja. Gak pake lama, gak bikin pusing. Ini bukan malas tapi ',
              },
              {
                text: 'efisiensi',
                type: 'bold',
              },

              {
                text: ' waktu.',
              },
            ],
          ],
        },
      ],
    },
  ],
  warn: [
    {
      text: 'Umumnya perusahaan asuransi akan mengkombinasikan ',
    },
    {
      text: 'Premi Neto',
      type: 'ins-term',
    },
    {
      text: ' dengan faktor-faktor lain, sehingga ',
    },
    {
      text: 'Premi',
      type: 'ins-term',
    },
    {
      text: ' yang kamu bayar mungkin lebih besar. Pelajari perbedaannya dengan ',
    },
    {
      text: 'Premi Bruto',
      type: 'ins-term',
    },
    {
      text: ' di ',
    },
    {
      text: 'sini',
      type: 'link-page',
      path: DataLinkPage.edu_netoVsBruto,
    },
    {
      text: '.',
    },
  ],
  sideInfo: {
    title: [
      {
        text: 'Bagaimana Asumsi Neto Dibuat?',
      },
    ],
    content: [
      {
        text: 'Asumsi dibuat sedemikian rupa hingga menghasilkan pendekatan yang relatif sesuai dengan kondisi di Indonesia. Dalam hal ini fungsi komutasi akan diterapkan.',
      },
    ],
    button: {
      text: 'Lihat Detail',
      // path: DataLinkPage.edu_createAssumption,
      path: 'http://gdurl.com/oS_L',
    },
  },
};

export const DataFormInput = {
  add: {
    path: DataLinkPage.calc_lifeIns_result,
    toggleAdv: {
      name: 'toggleAdv',
      open: {
        value: 'Tampilkan Opsi Lanjutan',
      },
      close: {
        value: 'Tutup',
        message: 'Opsi Lanjutan    /',
      },
    },
  },
  gender: {
    name: 'gender',
    label: DataLabel.gender,
    class: 'input-gender',
    options: ['Pilih jenis kelamin', 'Laki-laki', 'Perempuan'],
    required: 'Jenis kelamin tidak boleh kosong.',
  },
  age: {
    name: 'age',
    label: DataLabel.age,
    class: 'input-age',
    placeholder: '20',
    adornment: ['year'],
    required: 'Usia tidak boleh kosong.',
    min: (v) => v >= 0 || 'Usia minimum adalah 0.',
    max: (v) => v <= 111 || 'Usia maksimum adalah 111.',
    info: {
      name: 'info.age',
      content: [
        [
          {
            text: 'Usia yang dapat diinput adalah dari 0 sampai 111.',
          },
        ],
      ],
    },
  },
  product: {
    name: 'product',
    label: DataLabel.product,
    list: 'product-list',
    class: 'input-product',
    options: [
      'Pilih produk favoritmu',
      'Pure endowment',
      'Term life insurance',
      'Whole life insurance',
      'Endowment insurance',
    ],
    required: 'Jenis produk tidak boleh kosong.',
    info: {
      name: 'info.product',
      content: [
        [
          {
            text: 'Pure endowment',
            type: 'bold-italic',
          },
          {
            text: ' : Manfaat asuransi akan diterima jika masih hidup pada akhir periode.',
          },
        ],
        [
          {
            text: 'Term life insurance',
            type: 'bold-italic',
          },
          {
            text: ' : Manfaat asuransi akan diterima jika kematian terjadi dalam periode.',
          },
        ],
        [
          {
            text: 'Whole life insurance',
            type: 'bold-italic',
          },
          {
            text: ' : Manfaat asuransi akan diterima jika terjadi kematian (tanpa batas periode).',
          },
        ],
        [
          {
            text: 'Endowment insurance',
            type: 'bold-italic',
          },
          {
            text: ' : Manfaat asuransi akan diterima jika terjadi kematian dalam periode atau masih hidup pada akhir periode tersebut.',
          },
        ],
      ],
    },
  },
  period: {
    name: 'period',
    label: DataLabel.period,
    class: 'input-period',
    placeholder: '5',
    adornment: ['year'],
    required: 'Periode pertanggungan tidak boleh kosong.',
    min: (v) => v >= 0 || 'Periode pertanggungan minimum adalah 0.',
    distract: (v) => v === '' || v !== '',
    limit: { value: 111, message: 'Periode pertanggungan maksimum adalah' },
    info: {
      name: 'info.period',
      content: [
        [
          {
            text: 'Periode pertanggungan yang dapat diinput adalah dari 0 sampai 111, bergantung pada usia.',
          },
        ],
      ],
    },
  },
  tbp: {
    name: 'tbp',
    label: DataLabel.tbp,
    class: 'input-tbp',
    options: [
      'Pilih waktu pembayaran manfaat',
      'The end of the year of death',
      'The moment of death',
    ],
    required: 'Waktu pembayaran manfaat tidak boleh kosong.',
    info: {
      name: 'info.tbp',
      content: [
        [
          {
            text: 'The end of the year of death',
            type: 'bold-italic',
          },
          {
            text: ' : Manfaat asuransi akan diterima seolah-olah kematian terjadi pada akhir tahun (31 Desember...).',
          },
        ],
        [
          {
            text: 'The moment of death',
            type: 'bold-italic',
          },
          {
            text: ' : Manfaat asuransi akan diterima ketika kematian terjadi pada tanggal berapapun.',
          },
        ],
      ],
    },
  },
  calc: {
    name: 'calc',
    label: DataLabel.calc,
    class: 'input-calc',
    options: [
      'Pilih jenis perhitungan',
      'Hitung premi neto',
      'Hitung jumlah manfaat',
    ],
    required: 'Jenis perhitungan tidak boleh kosong.',
    info: {
      name: 'info.calc',
      content: [
        [
          {
            text: 'Hitung premi neto',
            type: 'bold-italic',
          },
          {
            text: ' : Hasil akan menampilkan premi neto yang harus dibayar.',
          },
        ],
        [
          {
            text: 'Hitung jumlah manfaat',
            type: 'bold-italic',
          },
          {
            text: ' : Hasil akan menampilkan total jumlah manfaat yang dapat diterima.',
          },
        ],
      ],
    },
  },
  tsi: {
    name: 'tsi',
    label: DataLabel.tsi,
    class: 'input-tsi',
    placeholder: '1,000,000,000',
    adornment: ['currency'],
    required: 'Jumlah manfaat tidak boleh kosong.',
    distract: (v) => v === '' || v !== '',
    info: {
      name: 'info.tsi',
      content: [
        [
          {
            text: 'Jumlah manfaat yang ingin diterima ketika terjadi klaim.',
          },
        ],
      ],
    },
  },
  premium: {
    name: 'premium',
    label: ['Premi Tunggal Neto', 'Premi Cicilan Neto'],
    class: 'input-premium',
    placeholder: '250,000,000',
    adornment: ['currency', 'year'],
    required: 'Premi neto tidak boleh kosong.',
    distract: (v) => v === '' || v !== '',
    info: {
      name: 'info.premium',
      content: [
        [
          {
            text: 'Premi neto yang ingin dibayar.',
          },
        ],
      ],
    },
  },
  aPremium: {
    name: 'aPremium',
    label: DataLabel.aPremium,
    class: 'input-aPremium',
  },
  installment: {
    name: 'installment',
    label: DataLabel.installment,
    class: 'input-installment',
    placeholder: '3',
    adornment: ['year'],
    min: (v) =>
      v === undefined ||
      v === '' ||
      v >= 1 ||
      'Periode cicilan minimum adalah 1.',
    distract: (v) => v === '' || v !== '',
    limit: { value: 111, message: 'Periode cicilan maksimum adalah' },
    info: {
      name: 'info.installment',
      content: [
        [
          {
            text: 'Periode cicilan yang dapat diinput adalah dari 0 sampai 111, bergantung pada usia. Cicilan akan dibayarkan satu kali dalam satu tahun.',
          },
        ],
      ],
    },
  },
  interest: {
    name: 'interest',
    label: DataLabel.interest,
    class: 'input-interest',
    placeholder: '3.56',
    adornment: ['percentage'],
    distract: (v) => v === '' || v !== '',
    info: {
      name: 'info.interest',
      content: [
        [
          {
            text: 'Tingkat bunga dalam satuan persen (%)',
          },
        ],
      ],
    },
  },
  mortality: {
    name: 'mortality',
    label: DataLabel.mortality,
    class: 'input-mortality',
    options: [
      'Pilih tabel mortalita',
      'Tabel Mortalita Indonesia IV',
      'Tabel Mortalita Indonesia III',
      'Buat Tabel Mortalita',
    ],
    info: {
      name: 'info.mortality',
      content: [
        [
          {
            text: 'Tabel probabilitas kematian seseorang yang telah disusun oleh para Aktuaris.',
          },
          {
            text: ' Pilih ',
          },
          {
            text: 'Buat Tabel Mortalita',
            type: 'bold',
          },
          {
            text: ' jika ingin menggunakan tabel sesuai keinginan.',
          },
        ],
      ],
    },
  },
  annuity: {
    name: 'annuity',
    label: DataLabel.annuity,
    class: 'input-annuity',
    options: ['Pilih jenis anuitas', 'Annuity due', 'Ordinary annuity'],
    validate: {
      message:
        'Usia + Periode cicilan < 111. Pilih kembali opsi ini jika sudah mengubah salah satunya.',
    },
    info: {
      name: 'info.annuity',
      content: [
        [
          {
            text: 'Annuity Due',
            type: 'bold',
          },
          {
            text: ': Cicilan dibayarkan pada setiap awal tahun (awal periode) atau langsung saat transaksi dilakukan.',
          },
        ],
        [
          {
            text: 'Ordinary Annuity',
            type: 'bold',
          },
          {
            text: ': Cicilan dibayarkan pada setiap akhir tahun (akhir periode) atau awal tahun depannya (menunggu 1x periode).',
          },
        ],
      ],
    },
  },
  customMortality: {
    toggleOpen: {
      name: 'toggleCustomMortality.open',
      label: 'Buka Tabel Editor',
      class: 'custom-mortality-toggle',
    },
    toggleSave: {
      name: 'toggleCustomMortality.save',
      label: 'Simpan Tabel',
      class: 'custom-mortality-toggle-save',
    },
    toggleApply: {
      name: 'toggleCustomMortality.apply',
      text: ['Klik di', 'apabila tidak mengalami perubahan.'],
      label: 'sini',
      class: 'custom-mortality-toggle-apply',
    },
    toggleTemplate: {
      name: 'toggleCustomMortality.template',
      label: 'Gunakan Template',
      class: 'custom-mortality-template-header',
    },
    template: {
      class: {
        mortality: 'input-template-mortality',
        gender: 'input-template-mortality-gender',
      },
      imt4: {
        name: 'toggleTemplate.mortality',
        id: 'imt4',
        label: 'TM Indonesia 4',
      },
      imt3: {
        name: 'toggleTemplate.mortality',
        id: 'imt3',
        label: 'TM Indonesia 3',
      },
      male: {
        name: 'toggleTemplate.gender',
        id: 'male',
        label: 'Laki-laki',
      },
      female: {
        name: 'toggleTemplate.gender',
        id: 'female',
        label: 'Perempuan',
      },
    },
    table: {
      validate: {
        min: 'Min. 0',
        max: 'Maks. 1',
      },
    },
  },
};
