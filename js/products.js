
let products=[

    // {id:1,title:"Alginate (with measures)",price:0,source:"https://tse3.mm.bing.net/th?id=OIP.OE-UrZ-UafRUBMtMPA2PXAAAAA&pid=Api&P=0&h=220",description:""},
    // {id:2,title:"Alginate Spatula",price:0,source:"https://tse3.mm.bing.net/th?id=OIP.qbcq9a639xIgq1jFMq0YkgHaHa&pid=Api&P=0&h=220",description:""},
    // {id:3,title:"Scissors",price:0,source:"https://www.faithfulltools.com/images/xxlarge/FAISCSS7.jpg",description:""},
    // {id:4,title:"Green stick compound",price:0,source:'https://tse3.mm.bing.net/th?id=OIP.Jb6A10Hk_wdAgWr87eXunAHaC8&pid=Api&P=0&h=220',description:""},
    // {id:5,title:"Dental stone ",price:20,source:"https://tse3.mm.bing.net/th?id=OIP.OUpiv2iwm67KlESPEgaU1QHaHa&pid=Api&P=0&h=220",description:"Dental stone type III or IV"},
    // {id:6,title:"Disinfection Spray",price:0,source:"https://www.universalmedicalinc.com/media/catalog/product/cache/5bd3fed9adf59001c06224efd5b5b3ea/4/2/42-32_protex-disinfectant-32oz-trigger-spray-bottles_1.jpg",description:""},
    // {id:7,title:"Sectional Tray ",price:0,source:"https://henryschein.com.au/images/ProductImages/AO-2801-L4S.jpg",description:"Sectional Trays (both metal and plastic)"},
    // {id:8,title:"Full-arch tray",price:0,source:"https://tse1.mm.bing.net/th?id=OIP.0LavsCFGY_AXrc1aUXrVJgHaHa&pid=Api&P=0&h=220",description:"Full-arch trays (both metal and plastic)"},
    // {id:9,title:"Gutta Perch",price:0,source:'https://tse4.mm.bing.net/th?id=OIP.LP92dHnlmb_kzUuyi1cslwHaE5&pid=Api&P=0&h=220',description:""},
    // {id:10,title:"Sealers",price:0,source:"https://www.safcodental.com/photos/products/large/20181220164203/endodontics/sealers-and-cements/tubli-seal-xpress-and-tubli-seal-ewt-xpress.jpg",description:""},
     // {id:11,title:"putty silicona condensacion",price:885,source:"https://www.dentaltix.com/en/sites/default/files/styles/large/public/silaxil-putty-silicona-condensacion.png?itok=DIrSOTh2",description:""},
    // {id:12,title:"charm temprycrown",price:0,source:"https://tse3.mm.bing.net/th?id=OIP.bncBifpGya_VuRiX9toG4QAAAA&pid=Api&P=0&h=220",description:""},

    // {id:13,title:"Mask",price:30,source:"https://tse4.mm.bing.net/th?id=OIP.sgTzd_WSnvN1SZTL7Sfz-wHaHa&pid=Api&P=0&h=220",description:""},
    // {id:14,title:"Napkin",price:45,source:'https://tse4.mm.bing.net/th?id=OIP.Zdtm6PDgRdn3Y0R2VS7dEgHaEg&pid=Api&P=0&h=220',description:""},
    // {id:15,title:"Wax knife",price:45,source:"https://tse2.mm.bing.net/th?id=OIP.IlyJlyDUL8-8-PQ4ilijiwHaHa&pid=Api&P=0&h=220",description:""},
    // {id:16,title:"Wax Carver",price:45,source:"https://sp.yimg.com/ib/th?id=OPHS.YSI%2bRtDhMM88mw474C474&o=5&pid=21.1&w=160&h=105",description:""},
    // {id:17,title:"Wax",price:0,source:"https://www.net32.com/media/shared/common/mp/buffalo-dental/buffalo-dental/media/buffalo-blue-carving-wax-85510.jpg",description:""},
    // {id:18,title:"Gloves",price:185,source:"https://tse1.mm.bing.net/th?id=OIP.qvVEeSV7jB5rrgmf-mpVyQHaHa&pid=Api&P=0&h=220",description:""},
    // {id:18,title:"Oil Spray",price:140,source:"https://tse2.mm.bing.net/th?id=OIP.fcAGeF5w5lKihb0bYRl5oAAAAA&pid=Api&P=0&h=220",description:""},

    // {id:20,title:"Micromotor with contra (china)",price:6850,source:'https://tse3.mm.bing.net/th?id=OIP.1hEXXNM3PbBNTNJq_ZjBsAAAAA&pid=Api&P=0&h=220',description:""},
    // {id:20,title:"Micromotor with contra (kori)",price:8550,source:'https://tse3.mm.bing.net/th?id=OIP.1hEXXNM3PbBNTNJq_ZjBsAAAAA&pid=Api&P=0&h=220',description:""},
    // {id:21,title:"low speed contra",price:0,source:'http://cdn.shopify.com/s/files/1/0906/2062/products/ACL_B_01C_grande.jpg?v=1447759778',description:""},
    // {id:21,title:"Air Motor",price:725,source:'https://tse2.mm.bing.net/th?id=OIP.uM8Al07g1SEg1P4uO0b-9AHaHa&pid=Api&P=0&h=220',description:""},
    // {id:21,title:"Straight Handpiece",price:820,source:'https://dentalstall.com/wp-content/uploads/2021/05/premium-straight-handpiece-4.jpg',description:""},
    // {id:21,title:"High speed contra (dental)",price:1650,source:'https://tse4.mm.bing.net/th?id=OIP.mMGB9j0bLf3QnW-T-yQCLgHaHa&pid=Api&P=0&h=220',description:""},
    // {id:22,title:"Articulator",price:400,source:'https://img.staticbg.com/images/oaupload/banggood/images/2C/04/43a48576-b7d7-4378-b50f-7fa8efad333e.JPG',description:""},
    // {id:23,title:"Magnet cast ",price:235,source:'https://tse2.mm.bing.net/th?id=OIP.y6Xz5AYVyIxPaY48Y69rCwHaGU&pid=Api&P=0&h=220',description:"Magnet cast + Acrylic anterior and posterior teeth not Elbanna Cast"},
    // {id:24,title:"Burs Low Speed X 3",price:120,source:'https://i.ebayimg.com/images/g/EngAAOSwDZJbKK6b/s-l400.jpg',description:"Burs: Round bur, Fissure bur, Inverted cone bur with (3 different sizes 0.8, 1, 2), 330 bur, 20 bur."},
    // {id:24,title:"Burs High Speed",price:0,source:'https://eickemeyercanada.ca/wp-content/uploads/2022/03/DentalBurrSet-LowSpeed_4802261_174205-1.jpg',description:"Burs: Round bur, Fissure bur, Inverted cone bur with (3 different sizes 0.8, 1, 2), 330 bur, 20 bur."},
    // {id:25,title:"Low diamond stones X 5",price:100,source:'https://tse1.mm.bing.net/th?id=OIP.NlVYdt5AOUz7hiaeOpSqSAHaHa&pid=Api&P=0&h=220',description:" (  tapered with round end size 1,2 & Tapered with flat end size 1,2 &  Fine tapered stone. (Short shank and long shank) &  Finishing stones"},
    // {id:25,title:"Hight diamond stones",price:0,source:'https://tse1.mm.bing.net/th?id=OIP.yfKGmgpb8a_Bxc0_3SR42AHaGh&pid=Api&P=0&h=220',description:" (  tapered with round end size 1,2 & Tapered with flat end size 1,2 &  Fine tapered stone. (Short shank and long shank) &  Finishing stones"},
    // {id:26,title:"Acrostone",price:305,source:'https://tse1.mm.bing.net/th?id=OIP.XtJ1mqEgCJrlm_ZFcamIXgHaFj&pid=Api&P=0&h=220',description:""},
    // {id:27,title:"Putty index",price:790,source:'https://tse4.mm.bing.net/th?id=OIP.4zyEQVS86Y8EPktdWyIoGQHaHa&pid=Api&P=0&h=220',description:""},
    // {id:28,title:"Acrylic teeth size 16",price:70,source:"https://tse3.mm.bing.net/th?id=OIP.VY-6AXM4HrOe5_YRCsOH1wHaDI&pid=Api&P=0&h=220",description:"Acrylic resin teeth size 16 (Anterior and posterior)"},
    // {id:29,title:"Mirror + Hand",price:36,source:'https://m.media-amazon.com/images/I/51uT0BISPBL._SL1144_.jpg',description:""},
    // {id:30,title:"Probe",price:45,source:'https://tse1.mm.bing.net/th?id=OIP.kdUnighDZoxfpe5JWzSvLwHaHa&pid=Api&P=0&h=220',description:""},
    // {id:31,title:"Tweezer",price:45,source:'https://tse2.mm.bing.net/th?id=OIP.QyNMiWaRCeJQnjfRHOan-wHaHQ&pid=Api&P=0&h=220',description:""},
    // {id:32,title:"Periodontal probe",price:45,source:'https://tse3.mm.bing.net/th?id=OIP.cXXx_34Eg7XtwhCeWPdbjQHaHN&pid=Api&P=0&h=220',description:""},
    // {id:33,title:"Torch",price:150,source:"https://tse3.mm.bing.net/th?id=OIP.ugg4S03o55H4UPhOAhXBLwAAAA&pid=Api&P=0&h=220",description:""},
    // {id:34,title:"Acrylic bur",price:90,source:'https://tse1.mm.bing.net/th?id=OIP.Ekey1vOqX1vuXUSFaagIvwHaHa&pid=Api&P=0&h=220',description:""},
    // {id:35,title:"Pink wax (cavex)",price:170,source:'https://tse3.mm.bing.net/th?id=OIP.zVBcNnWgbpVyhQ_YR0la1AAAAA&pid=Api&P=0&h=220',description:""},
    // {id:36,title:"Glass slabs x2",price:16,source:'https://tse4.mm.bing.net/th?id=OIP.ripIOGPAjMcjoaZxQr4M7gHaHa&pid=Api&P=0&h=220',description:""},
    // {id:38,title:"Surgical handle",price:40,source:"https://tse1.mm.bing.net/th?id=OIP.9febJaP3xyz2ZHiJiEvW1AHaEy&pid=Api&P=0&h=220",description:""},
    // {id:39,title:"Surgical blade size 15 X3",price:0,source:'https://www.proppermfg.com/wp-content/uploads/2018/11/Steel-Surgical-Blades.jpg',description:""},
    // {id:40,title:"Plasticine clay",price:0,source:'https://cdn.shoplightspeed.com/shops/609156/files/30686060/plasticine-plastilina-reusable-and-non-drying-mode.jpg',description:""},
    // {id:41,title:"Mixing spatula Metal",price:20,source:'https://www.net32.com/media/shared/common/mp/shafqat/shafqat/media/11R-Mixing-Plaster-Spatula-SFQ-DEN-3003.jpg',description:""},
    // {id:42,title:"Separating medium",price:6,source:'https://www.mclarendental.com.au/assets/full/AISM-500ML.jpg?20220222140559',description:""},
    // {id:43,title:"Rubber bands ",price:0,source:"https://tse2.mm.bing.net/th?id=OIP._aNJwx2svyUGYcxsOc2a6QHaGs&pid=Api&P=0&h=220",description:""},
    // {id:44,title:"edentulous stone casts",price:30,source:'https://tse1.mm.bing.net/th?id=OIP.Z0Vd6XVAIvIEHoMONdxGUgAAAA&pid=Api&P=0&h=220',description:"upper and lower edentulous stone casts"},
    // {id:0,title:"Glass cup",price:0,source:'https://tse4.mm.bing.net/th?id=OIP.0Sb3jCgmv2jp5LMKsg0LRgHaHa&pid=Api&P=0&h=220',description:""},
    // {id:46,title:"Sanding paper",price:0,source:'https://tse4.mm.bing.net/th?id=OIP.PAGihneSUXjiPAzK6EGqyAHaGy&pid=Api&P=0&h=220',description:""},
    // {id:47,title:"Rubber bow x2",price:30,source:'https://toothgood.com/wp-content/uploads/2016/04/1Pcs-Professional-Dental-Tool-Thicken-Dental-Lab-Rubber-Mixing-Bowl-Medical-Tool-Health-Care-Machine-Color.jpg',description:""},
    // {id:49,title:"Dental film barrier",price:140,source:'https://www.humayundental.com/wp-content/uploads/2020/11/Barrier-Film-China.jpg',description:""},
    // {id:50,title:"Toolbox size 17",price:395,source:'imgs/Box.jpg',description:""},
    // {id:51,title:"Spackling knife",price:20,source:'https://www.sanfinetools.com/sanfinetools/2022/09/07/h8b97fb78ffa64c7894ae11cc5bd24102d.jpg_960x960.jpg',description:""},

    


    {id:52,title:"Light curing unit",price:1650,source:'http://www.dentalaaka.com/uploaded_files/products/1084.jpg',description:"RTA Pro"},
    {id:53,title:"Nano Hybrid Composite X1",price:190,source:'https://www.dentaltix.com/es/sites/default/files/styles/large/public/composite-nano-hibrido.jpg?itok=FdVLFcJQ',description:""},
    {id:54,title:"Composite applicator",price:45,source:'https://images-na.ssl-images-amazon.com/images/I/51OBAgE3C6L._SL1000_.jpg',description:""},
    {id:55,title:"Amalgam Capsules x 10",price:350,source:'https://www.recende-dental.com/media/19/Amalgam%20Capsule%20(1).jpg',description:""},
    {id:56,title:"Amalgam Condenser X2",price:90,source:'https://tse2.mm.bing.net/th?id=OIP.ZdfECvMt57c3c_BIWh7FNwHaHa&pid=Api&P=0&h=220',description:"Amalgam Condenser (1 Small Condenser 1 Large Condenser)"},
    {id:57,title:"1 kit of composite",price:175,source:'https://tse3.mm.bing.net/th?id=OIP.QEhdemriJULt4hyBqhWWAAHaHa&pid=Api&P=0&h=220',description:"1 kit of assorted shapes/sizes"},
    {id:58,title:"Finishing Discs",price:175,source:'https://souq.dental/image/cache/wkseller/319/1.072-600x600.jpg.webp',description:"Finishing & Polishing Discs"},
    {id:59,title:"Polishing Brushes X 10",price:30,source:'https://tse2.mm.bing.net/th?id=OIP.VAzABHbb2YBzQihxPUKViwHaHa&pid=Api&P=0&h=220',description:""},
    {id:60,title:"Amalgam Morter",price:25,source:'https://tse1.mm.bing.net/th?id=OIP.vYBY9r0MJ6NTLvXBZKQziAHaHa&pid=Api&P=0&h=220',description:"Amalgam Morter & Pestle"},
    {id:61,title:"Amalgam Carrier",price:95,source:'https://www.coricama.it/wp-content/uploads/2016/10/348220.jpg',description:""},
    {id:62,title:"Anatomical Burnisher",price:45,source:'https://doctororder.net/uploads/images/202107/img_1920x_61029ee489b408-98252000-30208657.jpg',description:""},
    {id:63,title:"Amalgam Carver",price:45,source:'http://cdn.shopify.com/s/files/1/2120/3667/products/s-l1600-108_1200x1200.jpg?v=1547142062',description:""},
    {id:64,title:"Ball Burnisher",price:45,source:'https://orangeinstruments.com/wp-content/uploads/2020/07/ball-burnisher-18.jpg',description:""},
    {id:65,title:"Tofflemire Matrix Holder",price:95,source:'https://tse1.mm.bing.net/th?id=OIP.pjJyGld8ggLcClGgf6YHjAHaE8&pid=Api&P=0&h=220',description:""},
    {id:66,title:"Wooden Wedges",price:135,source:'https://tse1.mm.bing.net/th?id=OIP.BX1PW6jReEeH2txqD4j6fwHaFj&pid=Api&P=0&h=220',description:""},
    {id:67,title:"Flowable Composite X 1",price:185,source:'https://ncdsdental.com/wp-content/uploads/2020/08/A1621-Zircos-Com-Flow-Flowable-Composite-A1-2.1g.jpg',description:""},
    {id:68,title:"Universal Adhesive",price:275,source:'https://static.praxisdienst.com/out/pictures/generated/product/1/800_800_90/3m_espe_scotchbond_universal_adhaesiv_220680_1.jpg',description:""},
    {id:69,title:"Micro-Brushes for Adhesive",price:45,source:'https://tse1.mm.bing.net/th?id=OIP.w4iddb99zhMyB3hv4_FVWgHaHa&pid=Api&P=0&h=220',description:""},
    {id:70,title:"Sectional Matrix System",price:240,source:'https://5.imimg.com/data5/DB/GY/XY/SELLER-6638717/dental-sectional-matrix-system-500x500.jpg',description:"Sectional Matrix System (Ring and Bands)"},
    {id:71,title:"Celluloid Strips",price:7,source:'https://www.dentaltix.com/en/sites/default/files/styles/large/public/kit-universal-de-tiras-de-pulido-dentales.jpg?itok=LUgGLB9o',description:""},
    {id:71,title:"Finishing strips",price:70,source:'https://down-id.img.susercontent.com/file/2e277e1196a24f6130917b9d7f48e654',description:""},
    // {id:72,title:"Teflon Tape",price:0,source:'https://www.ontariobeerkegs.com/assets/images/teflon-tape-2.jpg',description:""},
    // {id:73,title:"Dental Floss",price:0,source:'https://tse1.mm.bing.net/th?id=OIP.k6wi4LU9yi89qvPyNHGblwHaHa&pid=Api&P=0&h=220',description:""},
    {id:73,title:"Tofflemire Matrix Bands",price:7,source:'https://www.waterpik.com/oral-health/products/images/Tofflemire-Matrix-Bands',description:""},
    // {id:73,title:"Isolation Kit",price:1240,source:'https://tse1.mm.bing.net/th?id=OIP.eiWCgbJxXlPwxyZqbUz_5QHaHa&pid=Api&P=0&h=220',description:""},
    {id:21,title:"High speed contra (Dental)",price:1650,source:'https://tse4.mm.bing.net/th?id=OIP.mMGB9j0bLf3QnW-T-yQCLgHaHa&pid=Api&P=0&h=220',description:""},
    {id:39,title:"K Files 10",price:60,source:'https://tse1.mm.bing.net/th?id=OIP.lbvItO-QWcffWGefiEjRBAHaHa&pid=Api&P=0&h=220',description:""},
    {id:39,title:"K Files  15-40",price:60,source:'https://image.made-in-china.com/2f0j00lNuicTVSHfpM/High-Quality-Azdent-Stainless-Steel-Dental-Endo-Files-K-Files-for-Hand-Use-15-40-25mm.jpg',description:""},
    {id:39,title:"K Files  45-80",price:60,source:'https://www.importadoradelgado.com/wp-content/uploads/2020/05/Lima-K-Files-25mm-45-80-min.png',description:""},
    {id:39,title:"H Files  45-80",price:60,source:'https://www.dentganga.com/storage/images/product/main_image/h%20file%2025mm%2045-801653038840.jpg',description:""},
    
    {id:39,title:"PHOSPHORIC ACID ETCH",price:40,source:'https://www.net32.com/media/shared/common/mp/vista-apex/best-etch/media/mfr-vistaapex-best-etch-0.37phosphoeicacidetchgel-prefilledsyringes-22gapre-benttips.jpg',description:"PHOSPHORIC ACID ETCH WITH DISPOSABLE TIPS "},
    {id:39,title:"Files Holder"        ,price:20,source:'https://tse1.mm.bing.net/th?id=OIP.KlDtL_fUzEBONzdt4hqKnQHaHa&pid=Api&P=0&h=220',description:"FILE HOLDER OR BANKER’S SPONGE"},
    {id:39,title:"ENDODONTIC RULER"    ,price:25,source:'https://www.pearsondental.com/catalog/img/Z190234_Blue.jpg',description:""},
    {id:39,title:"ROUND BUR HIGH"      ,price:45,source:'https://stevensondentalsolutions.com/wp-content/uploads/2_round-scaled.jpg',description:""},
    {id:39,title:"Stone with round end high",price:8,source:'https://js-davis.co.uk/wp-content/uploads/2021/03/852-314-018-FW-1024x1024.jpg',description:""},
    {id:39,title:"Design Wax",price:270,source:'https://s3.eu-west-1.amazonaws.com/drive.dentacarts.com/public/products/441/44197_1.png',description:"Kit ( 2 lingual bar major connector, aker clasp, meshwork) "},
    {id:39,title:"Casts Kenndy",price:50,source:'https://edental.s3.us-east-2.amazonaws.com/images/documents/f355844d7195c48bc0854d3e67e588f2.png',description:"Upper, lower class 1 Upper class2 mod 1  Upper class3mod 1  Upper class2 "},

]

