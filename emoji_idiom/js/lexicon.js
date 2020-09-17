/*
fileLists, fileLists2 是在cmd 导出的 $ dir /b /o:n>..\txt.txt
data2, data3 都是生成的, 随时被覆盖的可能
subspecies 是记录的数据

title 是 id
*/

var lexicon = [{
	"word": "爱不释手",
	"hex": ["%Z4%@]JSA0%O[(N[}HTN7MJ", "CA7_46}C7S9A$Z~I_49K_AM", "D4H6J(90(WSZZ%TRSGKHP$A", "WEHWKB]G582CZXBLTP}L3]1"]
}, {
	"word": "爱屋及乌",
	"hex": ["3`Z3CZ~LS7N2UJZH)25@4LK", "F68WXQMVZK6`S@[WFVJQ_KN", "%WLIU6QE1T[XIU~H%{TW%%7", "F68WXQMVZK6`S@[WFVJQ_KN"]
}, {
	"word": "八方支援",
	"hex": ["4U9HLYEAVVAXM_P5_72])4D", "G6APQ@N6MWKJPDD`KMXL{WK", "U[9LEL_ZD%4EEUK1K[W$HIR", "KGM`}K($2K1DIXW}A$J`YL6"]
}, {
	"word": "八仙过海",
	"hex": ["4U9HLYEAVVAXM_P5_72])4D", "5T3GXKVT]W3XQR`MA0S_W74", ")PZ`J]2JBM~S@(EQ}O$}MM6", "H$KAZU9@$4)DZM$8$9TRYD0"]
}, {
	"word": "白马非马",
	"hex": ["KGM`}K($2K1DIXW}A$J`YL6", "CFO08B9LWOBHYV_G}Y5ZUB3", "KU~V2S)[7AAGOAP~)FZZ7C3", "CFO08B9LWOBHYV_G}Y5ZUB3"]
}, {
	"word": "白面儒冠",
	"hex": ["0~]BQ(@JIPK)Y3CM4_$Y)MW", "K5QCTA@FP[22%0ZZZ[{`~`O", "8FR6P@U)7JSO}53C4VF~6XD", "~E@]3OJ9)($G[5H){YS)1FI"]
}, {
	"word": "白头偕老",
	"hex": ["KGM`}K($2K1DIXW}A$J`YL6", "9`2MO}ITWT5X2ZIKD3V(6GX", "M~GU)Y4A%MWQHU%O))DC5(M", "3WIBJ$L4F4EKDE}QV`PVS)1"]
}, {
	"word": "百万雄兵",
	"hex": ["DNQ{1@XDXF07LK_ISYFMD9Y", "}TE)237S}Z~V(0$$BQNJWYI", "A507Y0F(73OQOTR{0O)NGZI", "(~8AS`1L)`8$PLMSZGTRJ25"]
}, {
	"word": "饱经风霜",
	"hex": ["C~MG1FH}@_D8ZODVZCTPPP3", "N[O{`WN5GLP4XJFBGQ@EVCV", "2X5_U{YMX}]NGLP{8O5@B3F", "BN[B_P7_%N}%XH_Q%I3}[KS"]
}, {
	"word": "饱食终日",
	"hex": ["C~MG1FH}@_D8ZODVZCTPPP3", "I`Q{A5T7DK7QUG@~%L46]3T", "@XY]@EKJCOGR0}JAG2CD50J", "{~P9ANL%EB4$8}B(1V0HT_4"]
}, {
	"word": "卑不足道",
	"hex": ["DI@YVYF9P`FG@Y[IHW4IKUI", "P4P[MSA1(J2ZBDY29MI0(%O", "9N004]A}RAC%@[{BYTCLZXO", "VG$6@OTYR@QD4(6D%%7O]EL"]
}, {
	"word": "杯弓蛇影",
	"hex": ["DI@YVYF9P`FG@Y[IHW4IKUI", "]OPQAGC__XOKN7OR9Y_AS7W", "~BC@S4$74D~{RV$3M5W~6(F", "$4$DNLSD2MECLZIBH4`CP0H"]
}, {
	"word": "杯水车薪",
	"hex": ["DI@YVYF9P`FG@Y[IHW4IKUI", "WK{C~[E(`I%TY@ILZKWW_TD", "EUH[KFYN}V}9V77POVH{0(S", "D0)Q$W1@ZP$7W@NTBPT8B}J"]
}, {
	"word": "杯水车薪",
	"hex": ["O6ZF%W9MGN78_8{8_P9UBQ5", "6WN]0%L%U{896C0I%H)$@QM", "0JL)TDER1RT9%}4@NKJB4DX", "JN]Y(9@65~HPARNA2C)8$I4"]
}, {
	"word": "杯水车薪",
	"hex": ["YUD]ZI6K~BA~96ZZMTH3N_5", "6WN]0%L%U{896C0I%H)$@QM", "EUH[KFYN}V}9V77POVH{0(S", "D0)Q$W1@ZP$7W@NTBPT8B}J"]
}, {
	"word": "悲喜交加",
	"hex": ["E88GZPUWFVDHABP)KB6_FYJ", "8OEVOVTI$OO0CVL(]4M6EX8", "CA7_46}C7S9A$Z~I_49K_AM", "_IO_RS]{~(%04NF]CUA5MU0"]
}, {
	"word": "笔下生花",
	"hex": ["TOK`NV1GAG(K%Y7B7AD$B2M", "5C062Z@`4W[FS6PH~ACJ2M9", "CI]~O3RMBK$FMEM]ZP$SQQ7", "S}Q{_~S0S{NMC1VAKGKD9]3"]
}, {
	"word": "冰肌玉骨",
	"hex": ["(~8AS`1L)`8$PLMSZGTRJ25", "7[R844}%0OFGK]5`{V[WK)N", "8X{2XF@`KSE_`P2XB@ZADUY", "~2TW7Q@6@M7CNA7JLN`LMTF"]
}, {
	"word": "冰心一片",
	"hex": ["(~8AS`1L)`8$PLMSZGTRJ25", "%Z4%@]JSA0%O[(N[}HTN7MJ", "ZPH0$A6OV{2KGN1KU39@S`1", "7$~M3``Z~$%(FMGHBM%O1{5"]
}, {
	"word": "兵不厌诈",
	"hex": ["9P}9G$}PMF6}4SC0D@MOUEY", "{DWVE`UPU5}UWI%M76NUFBK", "]09R)N86]~AG4~9@X01)FMV", "P{8L7H%`L73GHM%9KYRWT`J"]
}, {
	"word": "兵行诡道",
	"hex": ["(~8AS`1L)`8$PLMSZGTRJ25", "N~55(SH2R88N@PZ2P(XA$LS", "H`)[_ZAMAN0}0~AL[3$_LUJ", "VG$6@OTYR@QD4(6D%%7O]EL"]
}, {
	"word": "拨云见日",
	"hex": ["DPX%]3EL4C%GG5B{~(Z)[@G", "[LVE`85IMDE4JWP1U4@LY77", "U]AOJ}6BICTK[L(1@GX[$F4", "IQ9@C~H76NQW{DB~_I)K)BV"]
}, {
	"word": "博而不精",
	"hex": ["DPX%]3EL4C%GG5B{~(Z)[@G", "$8P3)ZLAZA{HX%[VDN8T%YA", "P4P[MSA1(J2ZBDY29MI0(%O", "N[O{`WN5GLP4XJFBGQ@EVCV"]
}, {
	"word": "博览五车",
	"hex": ["DPX%]3EL4C%GG5B{~(Z)[@G", "H@ZU({0Q5VV](7D%KQ%(9}Q", "AMZ)2V[2HY5G_S[{Y}T(UJE", "EUH[KFYN}V}9V77POVH{0(S"]
}, {
	"word": "不识泰山",
	"hex": ["Y~YS3_QCBLR9OCYKPO@V_48", "H@ZU({0Q5VV](7D%KQ%(9}Q", "{~P9ANL%EB4$8}B(1V0HT_4", "8L0OHAR(_[A2U72IIONV6RK"]
}, {
	"word": "不闻不问",
	"hex": ["Y~YS3_QCBLR9OCYKPO@V_48", "$8P3)ZLAZA{HX%[VDN8T%YA", "Y~YS3_QCBLR9OCYKPO@V_48", "LLYXF9H612_TOKXXX}$`K@8"]
}, {
	"word": "不依不饶",
	"hex": ["P4P[MSA1(J2ZBDY29MI0(%O", "]IHIRB3O8_TXW)R_VQA04ME", "CA7_46}C7S9A$Z~I_49K_AM", "N3B7{O70B_]ZJR%N7~IQ)YN"]
}, {
	"word": "不饮盗泉",
	"hex": ["P4P[MSA1(J2ZBDY29MI0(%O", "9N004]A}RAC%@[{BYTCLZXO", "VG$6@OTYR@QD4(6D%%7O]EL", "%PE{B8W}_YEGXHC_D_IK~(G"]
}, {
	"word": "步步惊心",
	"hex": ["9N004]A}RAC%@[{BYTCLZXO", "9N004]A}RAC%@[{BYTCLZXO", "CE_6{RQP]3{T@BAJGTH{IW4", "%Z4%@]JSA0%O[(N[}HTN7MJ"]
}, {
	"word": "草草收兵",
	"hex": ["R~9%39S[D~P~(SN5WXS$K)1", "R~9%39S[D~P~(SN5WXS$K)1", "WEHWKB]G582CZXBLTP}L3]1", "(~8AS`1L)`8$PLMSZGTRJ25"]
}, {
	"word": "草木皆兵",
	"hex": ["4}`$0~M8@S9VIB9{WQCC6A2", "ZCMNP)I@H0]I2~NUZRM@9QR", "BI]EBT7[F%0T%T$A3LZZWC3", "Y79AZ$NLICT2_ZK5NZLU[`T"]
}, {
	"word": "茶饭不思",
	"hex": ["YUD]ZI6K~BA~96ZZMTH3N_5", "W``GSE)8(Z75KX3%~0IR@IP", "CA7_46}C7S9A$Z~I_49K_AM", "`J2X`%{$}8J)4HP_$({YCJH"]
}, {
	"word": "察言观色",
	"hex": ["YUD]ZI6K~BA~96ZZMTH3N_5", "H@ZU({0Q5VV](7D%KQ%(9}Q", "~E@]3OJ9)($G[5H){YS)1FI", "69}2F]68[%4O6U{2Y_1IC21"]
}, {
	"word": "朝三暮四",
	"hex": ["IQ9@C~H76NQW{DB~_I)K)BV", "~TPINOW{}WLMRD_IMJUNQZW", "2}JB2}6{KGC{CX9)~WQ{%Z7", "5C2NMMQTKNNPKO1RVMPMJBD"]
}, {
	"word": "车水马龙",
	"hex": ["DPOM[NXU(8]B2`KGW{R%7$5", "WK{C~[E(`I%TY@ILZKWW_TD", "I8F[Y~8KB%J668[5JV6[)GI", "~}6SZVI`1U_EZLPFUHP7XMQ"]
}, {
	"word": "车水马龙",
	"hex": ["EUH[KFYN}V}9V77POVH{0(S", "6WN]0%L%U{896C0I%H)$@QM", "CFO08B9LWOBHYV_G}Y5ZUB3", "]1$V5DDXRZ6QSQHTC5J}5`Q"]
}, {
	"word": "魑魅魍魉",
	"hex": ["A](3){YOPFTY@MF(7W6D394", "G}2E9Q)_04U4S8@CVCP9)54", "~2TW7Q@6@M7CNA7JLN`LMTF", "H`)[_ZAMAN0}0~AL[3$_LUJ"]
}, {
	"word": "冲风冒雨",
	"hex": ["O3WQ)C1S%G`35I`J59L`5VW", "2X5_U{YMX}]NGLP{8O5@B3F", "~E@]3OJ9)($G[5H){YS)1FI", "8X{2XF@`KSE_`P2XB@ZADUY"]
}, {
	"word": "愁眉苦脸",
	"hex": ["O6ZF%W9MGN78_8{8_P9UBQ5", "1A2L{B}FUPY008~[20I014A", "__)KY`R7~N~6GK3D3`H7ZQJ", "BI]EBT7[F%0T%T$A3LZZWC3"]
}, {
	"word": "传道受业",
	"hex": ["}@ZY1OKC7}]4JSXYI$6LYKR", "{9@JZA0[J7DBC452ZG~92AM", "WEHWKB]G582CZXBLTP}L3]1", "(FNXNDEG{NP}{J`D$VJ7ZZ4"]
}, {
	"word": "传道受业",
	"hex": ["2N{DEO%YOZB6Z8G`X_Q0[OI", "VG$6@OTYR@QD4(6D%%7O]EL", "`_SB61HBN$~TEIIV(1LLHTP", "~8W08NY29@MGSF15J$H)%VE"]
}, {
	"word": "唇齿相依",
	"hex": ["LLYXF9H612_TOKXXX}$`K@8", "}QQNUFQFC_}Q5M9)SBYO39H", ")87BIFAMB2[SCJDT6Q1478L", "ZPH0$A6OV{2KGN1KU39@S`1"]
}, {
	"word": "绰绰有余",
	"hex": ["P4P[MSA1(J2ZBDY29MI0(%O", "P4P[MSA1(J2ZBDY29MI0(%O", "Y0%$7`7{K)LX}5C3R1Q65I8", "2ZGA8U%[IZJ6]5QQ7K38KUV"]
}, {
	"word": "代代相承",
	"hex": ["6)ZIJ%_BVVE{0BO}V4020RM", "6)ZIJ%_BVVE{0BO}V4020RM", ")87BIFAMB2[SCJDT6Q1478L", "JF1@CW8DF5PKJ2]R7VSGJJ8"]
}, {
	"word": "代代相承",
	"hex": ["C~MG1FH}@_D8ZODVZCTPPP3", "6)ZIJ%_BVVE{0BO}V4020RM", "$T0GN`LMNBC9{5M}`3C8]GE", "YY7V0_QB_T(D@[)%2[1T${6"]
}, {
	"word": "刀光剑影",
	"hex": ["VG$6@OTYR@QD4(6D%%7O]EL", "M9DFTC(G$95VZX2CJGD23~J", "N~C7NOY~03VN7XYAI6$QHML", "T3P8VUT93IIW47AH8YH@]F7"]
}, {
	"word": "刀光血影",
	"hex": ["VG$6@OTYR@QD4(6D%%7O]EL", "H]~FNNG1(Q]JXN8D13DMS)U", "Y79AZ$NLICT2_ZK5NZLU[`T", "$4$DNLSD2MECLZIBH4`CP0H"]
}, {
	"word": "刀山火海",
	"hex": ["VG$6@OTYR@QD4(6D%%7O]EL", "}KP0O6L)3G)5Q@PS(R)X~4M", "S~LW`Y7C8DV}Q91QC%Q`6HH", "H$KAZU9@$4)DZM$8$9TRYD0"]
}, {
	"word": "刀山剑树",
	"hex": ["VG$6@OTYR@QD4(6D%%7O]EL", "]OVVCH2HZO]H3)@)~{WL[NS", "U]AOJ}6BICTK[L(1@GX[$F4", "ZCMNP)I@H0]I2~NUZRM@9QR"]
}, {
	"word": "刀下留人",
	"hex": ["VG$6@OTYR@QD4(6D%%7O]EL", "5C062Z@`4W[FS6PH~ACJ2M9", "15{UML[W@U{DUUS(DBGWS}I", "BI]EBT7[F%0T%T$A3LZZWC3"]
}, {
	"word": "地主之仪",
	"hex": ["5XSW_8$4YN`R]8YVHS}(@ZX", "X`XX$4}QX3X5YG3G_T_G6ZS", "U[9LEL_ZD%4EEUK1K[W$HIR", "UJY0X2Q52PI[2ACUWRW%$(R"]
}, {
	"word": "东奔西走",
	"hex": ["Y79AZ$NLICT2_ZK5NZLU[`T", ")PZ`J]2JBM~S@(EQ}O$}MM6", "WS(EVLZ(ZL0LM[%FXEKY64P", "N~55(SH2R88N@PZ2P(XA$LS"]
}, {
	"word": "睹物思人",
	"hex": ["H@ZU({0Q5VV](7D%KQ%(9}Q", "[WLXVKQ2]XJ~JLCPV]Q))1R", "C}}[~6B3~6[2O[(Y0$ALOPW", "BI]EBT7[F%0T%T$A3LZZWC3"]
}, {
	"word": "恶语伤人",
	"hex": ["2U@_KC)UXA9]QUQ)N30A%UG", "]WW)1ZK$187C_JU99%1H6_D", "VG$6@OTYR@QD4(6D%%7O]EL", "K5QCTA@FP[22%0ZZZ[{`~`O"]
}, {
	"word": "儿女亲家",
	"hex": ["K5QCTA@FP[22%0ZZZ[{`~`O", ")0ZC)@GM`E[XFPT]G9}FOCC", "2H5Z3JF[9{P0}I[6M99%%@E", "_IO_RS]{~(%04NF]CUA5MU0"]
}, {
	"word": "发上指冠",
	"hex": ["5EM@RIN{GOE(SEM{~RI93EB", "5`IG]4CLF7[EV~$04KJN2MT", "ZPH0$A6OV{2KGN1KU39@S`1", "~E@]3OJ9)($G[5H){YS)1FI"]
}, {
	"word": "防不胜防",
	"hex": ["F68WXQMVZK6`S@[WFVJQ_KN", "CA7_46}C7S9A$Z~I_49K_AM", "5`IG]4CLF7[EV~$04KJN2MT", "F68WXQMVZK6`S@[WFVJQ_KN"]
}, {
	"word": "放虎归山",
	"hex": ["7$~M3``Z~$%(FMGHBM%O1{5", "Y7M$L13B{$D)$EI@}U4HALY", "OMINO(K}(B(R0B($2$YWMV3", "]OVVCH2HZO]H3)@)~{WL[NS"]
}, {
	"word": "飞龙在天",
	"hex": ["KU~V2S)[7AAGOAP~)FZZ7C3", "]1$V5DDXRZ6QSQHTC5J}5`Q", "ZPH0$A6OV{2KGN1KU39@S`1", "[LVE`85IMDE4JWP1U4@LY77"]
}, {
	"word": "飞禽走兽",
	"hex": ["KU~V2S)[7AAGOAP~)FZZ7C3", "_](PF0PC@R8D_ZM{5PN]RP7", "N~55(SH2R88N@PZ2P(XA$LS", "Y7M$L13B{$D)$EI@}U4HALY"]
}, {
	"word": "风和日丽",
	"hex": ["2X5_U{YMX}]NGLP{8O5@B3F", "F@4RR9(HGB94~@9B{06LW~G", "IQ9@C~H76NQW{DB~_I)K)BV", "7[R844}%0OFGK]5`{V[WK)N"]
}, {
	"word": "风花雪月",
	"hex": ["_F$J3PD8@Z@6N7`CY1E%%_D", "MCQDK}IQDSMBW}}M4JQ~]A9", "Y79AZ$NLICT2_ZK5NZLU[`T", "D]L]DI8DC%1)7F24$O{}`PC"]
}, {
	"word": "风华绝代",
	"hex": ["2X5_U{YMX}]NGLP{8O5@B3F", "FZK9(CP}P_K5@GCZ${{PW]B", "N{XPBXMII5{7%_RW5IAWS$D", "6)ZIJ%_BVVE{0BO}V4020RM"]
}, {
	"word": "风流人物",
	"hex": ["2X5_U{YMX}]NGLP{8O5@B3F", "15{UML[W@U{DUUS(DBGWS}I", "9`2MO}ITWT5X2ZIKD3V(6GX", "_IO_RS]{~(%04NF]CUA5MU0"]
}, {
	"word": "风行电击",
	"hex": ["2X5_U{YMX}]NGLP{8O5@B3F", "N~55(SH2R88N@PZ2P(XA$LS", "M9DFTC(G$95VZX2CJGD23~J", "%WLIU6QE1T[XIU~H%{TW%%7"]
}, {
	"word": "风行一世",
	"hex": ["WA~65N(6K9F7UL$BL{91})4", "7WGIVMMK2UDT~U@CHYIH{3I", "W1EA85T_V7FV2WWWPX3WGWC", "D4H6J(90(WSZZ%TRSGKHP$A"]
}, {
	"word": "风行一世",
	"hex": ["WA~65N(6K9F7UL$BL{91})4", "T_ZKW6KJ_X{%[%P_AY$`(]X", "ZPH0$A6OV{2KGN1KU39@S`1", "U1KZUP_TP35PUE3H8E1OYCN"]
}, {
	"word": "风雨凄凄",
	"hex": ["2X5_U{YMX}]NGLP{8O5@B3F", "8X{2XF@`KSE_`P2XB@ZADUY", "UCI28L%UKTDML5H7{`VRYMU", "UCI28L%UKTDML5H7{`VRYMU"]
}, {
	"word": "凤舞龙飞",
	"hex": ["2X5_U{YMX}]NGLP{8O5@B3F", "3I7IF}4TKE@56{EYG%D63HF", "~}6SZVI`1U_EZLPFUHP7XMQ", "KU~V2S)[7AAGOAP~)FZZ7C3"]
}, {
	"word": "高人一等",
	"hex": ["CI]~O3RMBK$FMEM]ZP$SQQ7", "K5QCTA@FP[22%0ZZZ[{`~`O", "2F$CIZC%OLL%IC~3N)K}3YD", "KJ%FW]LK5JNO9MYSL5[@M`U"]
}, {
	"word": "高山仰止",
	"hex": ["CI]~O3RMBK$FMEM]ZP$SQQ7", "]OVVCH2HZO]H3)@)~{WL[NS", "E39{U37D$M(J0D{`}3(1DWJ", "DI@YVYF9P`FG@Y[IHW4IKUI"]
}, {
	"word": "高屋建瓴",
	"hex": ["CI]~O3RMBK$FMEM]ZP$SQQ7", "F68WXQMVZK6`S@[WFVJQ_KN", "U]AOJ}6BICTK[L(1@GX[$F4", "J{34WCZ65PYFJ`PC~M0BY`I"]
}, {
	"word": "各就各位",
	"hex": ["R5~JL[%54C}E2VBBF_VX}S5", "2%QUC6W)F0~4$@YI0D1_2UM", "R5~JL[%54C}E2VBBF_VX}S5", "}G][OE]`UZNQ)7$[8Z6R_NL"]
}, {
	"word": "刮目相看",
	"hex": ["WS(EVLZ(ZL0LM[%FXEKY64P", "H@ZU({0Q5VV](7D%KQ%(9}Q", ")87BIFAMB2[SCJDT6Q1478L", "H@ZU({0Q5VV](7D%KQ%(9}Q"]
}, {
	"word": "归心似箭",
	"hex": ["OMINO(K}(B(R0B($2$YWMV3", "3`Z3CZ~LS7N2UJZH)25@4LK", "YYKPK%]F4{I[VF$Y](DTHKH", "U]AOJ}6BICTK[L(1@GX[$F4"]
}, {
	"word": "鬼斧神工",
	"hex": ["H`)[_ZAMAN0}0~AL[3$_LUJ", "_RTFARG(NUO_IULGEQZAU3C", "%U~)P7%{DX]22C379~6)YQM", "O)U47U5QA$@J%SDTR50XXFL"]
}, {
	"word": "过时黄花",
	"hex": ["N9ZX}8Q9}7{@2)FSK`4)YD6", "I`Q{A5T7DK7QUG@~%L46]3T", "}H%{L_DRT[OE8]GI}6_4K2N", "MCQDK}IQDSMBW}}M4JQ~]A9"]
}, {
	"word": "过眼云烟",
	"hex": ["N9ZX}8Q9}7{@2)FSK`4)YD6", "H@ZU({0Q5VV](7D%KQ%(9}Q", "[LVE`85IMDE4JWP1U4@LY77", "ALJ4@UAID6IC4VGE4B4)IHK"]
}, {
	"word": "汗如雨下",
	"hex": ["WK{C~[E(`I%TY@ILZKWW_TD", "8FR6P@U)7JSO}53C4VF~6XD", "8X{2XF@`KSE_`P2XB@ZADUY", "4W}[)MLG0FZP)}PCEI@1LK7"]
}, {
	"word": "红男绿女",
	"hex": ["%Z4%@]JSA0%O[(N[}HTN7MJ", "9`2MO}ITWT5X2ZIKD3V(6GX", "TZT[YE~(`_8]DR24()2DPK4", "Y$LZ%FBUMI8%%{NQ`[WW1(G"]
}, {
	"word": "侯门似海",
	"hex": ["H{DVOHBB@H_Y@%_~6SY@BLH", "K2N9H9R82`C@3}ASMMA1_{K", "C}}[~6B3~6[2O[(Y0$ALOPW", "H$KAZU9@$4)DZM$8$9TRYD0"]
}, {
	"word": "猴年马月",
	"hex": ["H{DVOHBB@H_Y@%_~6SY@BLH", "4B]GVXI$~A2%2IFQG50F7CE", "CFO08B9LWOBHYV_G}Y5ZUB3", "6NFJ93EKT%5XR939}`28O1C"]
}, {
	"word": "狐假虎威",
	"hex": ["@(E_MLX3JTZKN)1M(OSN0@S", "08}R}[E1Z%ORTX~7622%{@9", "AH4]U3`B(T$TW(}JVZOWTNA", "VBU%_J2QL2FGS5WYNIS%7UA"]
}, {
	"word": "虎口余生",
	"hex": ["HJ[KUDU4}DMJXB{FYL4`XJR", "LLYXF9H612_TOKXXX}$`K@8", "N[O{`WN5GLP4XJFBGQ@EVCV", "CI]~O3RMBK$FMEM]ZP$SQQ7"]
}, {
	"word": "虎视眈眈",
	"hex": ["Y7M$L13B{$D)$EI@}U4HALY", "H@ZU({0Q5VV](7D%KQ%(9}Q", "T5Y%}K]$1N)}MAF3ZI1C1SD", "T5Y%}K]$1N)}MAF3ZI1C1SD"]
}, {
	"word": "虎头虎脑",
	"hex": ["Y7M$L13B{$D)$EI@}U4HALY", "Y7M$L13B{$D)$EI@}U4HALY", "Y7M$L13B{$D)$EI@}U4HALY", "Y7M$L13B{$D)$EI@}U4HALY"]
}, {
	"word": "花花公子",
	"hex": ["FZK9(CP}P_K5@GCZ${{PW]B", "MCQDK}IQDSMBW}}M4JQ~]A9", "]OPQAGC__XOKN7OR9Y_AS7W", "K5QCTA@FP[22%0ZZZ[{`~`O"]
}, {
	"word": "花前月下",
	"hex": ["S}Q{_~S0S{NMC1VAKGKD9]3", "5R5CSIFU0`)D~W@%_K4J76A", "2}JB2}6{KGC{CX9)~WQ{%Z7", "5C062Z@`4W[FS6PH~ACJ2M9"]
}, {
	"word": "华屋山丘",
	"hex": ["FZK9(CP}P_K5@GCZ${{PW]B", "[WLXVKQ2]XJ~JLCPV]Q))1R", "]OVVCH2HZO]H3)@)~{WL[NS", "OBUYB]DH{3G3K21[[6~X{S8"]
}, {
	"word": "华星秋月",
	"hex": ["S}Q{_~S0S{NMC1VAKGKD9]3", "T0W1F%X~NBVCQ$RG52L0EE6", "AZ1HXL[XP46~5Z2{6LTJ}IV", "D]L]DI8DC%1)7F24$O{}`PC"]
}, {
	"word": "画龙点睛",
	"hex": ["F9}3}{RYT(0(VWVJIB5%MNQ", "]1$V5DDXRZ6QSQHTC5J}5`Q", ")2R(3%H@{_3_DSMBQ0XM)(P", "H@ZU({0Q5VV](7D%KQ%(9}Q"]
}, {
	"word": "画蛇添足",
	"hex": ["P4AE{_FZJ`NL~MG$83[0YCN", "~BC@S4$74D~{RV$3M5W~6(F", "[LVE`85IMDE4JWP1U4@LY77", "M~GU)Y4A%MWQHU%O))DC5(M"]
}, {
	"word": "魂不守舍",
	"hex": ["H`)[_ZAMAN0}0~AL[3$_LUJ", "P4P[MSA1(J2ZBDY29MI0(%O", "WEHWKB]G582CZXBLTP}L3]1", "~BC@S4$74D~{RV$3M5W~6(F"]
}, {
	"word": "火烧火燎",
	"hex": ["S~LW`Y7C8DV}Q91QC%Q`6HH", "NP`}]6~6ZXRJ8(`~$14JHFJ", "S~LW`Y7C8DV}Q91QC%Q`6HH", "NP`}]6~6ZXRJ8(`~$14JHFJ"]
}, {
	"word": "火树银花",
	"hex": ["S~LW`Y7C8DV}Q91QC%Q`6HH", "K%WUOBH4IWV@N5)]5IQC~DF", "QKDJBH_KO4YG4F[3{(ZUB[F", "FZK9(CP}P_K5@GCZ${{PW]B"]
}, {
	"word": "机不可失",
	"hex": ["%WLIU6QE1T[XIU~H%{TW%%7", "CA7_46}C7S9A$Z~I_49K_AM", "JS{H3PKBG[6_NFME4%FUH29", "D4H6J(90(WSZZ%TRSGKHP$A"]
}, {
	"word": "鸡飞狗跳",
	"hex": ["55@K8DLC{G57OZ8D27BMXYD", "KU~V2S)[7AAGOAP~)FZZ7C3", ")O6WIX$`F195J{R@5JFL(I4", ")PZ`J]2JBM~S@(EQ}O$}MM6"]
}, {
	"word": "鸡口牛后",
	"hex": ["%WLIU6QE1T[XIU~H%{TW%%7", "LLYXF9H612_TOKXXX}$`K@8", "SR68QL(U%TT_%VM[@)@~Q)I", "H{DVOHBB@H_Y@%_~6SY@BLH"]
}, {
	"word": "鸡鸣狗盗",
	"hex": ["%WLIU6QE1T[XIU~H%{TW%%7", "`YHSF96PG%UT295}P(%Y6RY", "@(E_MLX3JTZKN)1M(OSN0@S", "VG$6@OTYR@QD4(6D%%7O]EL"]
}, {
	"word": "鸡犬升天",
	"hex": ["{_[QO$DW7DB_0YBWCYOYU_9", "P9B}%QRP5ZB1TJ7UZDYHE`U", "CI]~O3RMBK$FMEM]ZP$SQQ7", "O72%G]PWNNFRCU4VII4US`1"]
}, {
	"word": "鸡同鸭讲",
	"hex": ["%WLIU6QE1T[XIU~H%{TW%%7", "0{A{QL0XERF15K(BI3HF6@T", "55@K8DLC{G57OZ8D27BMXYD", "V54BR%R4{HNQ1MYECQRX3YQ"]
}, {
	"word": "家家户户",
	"hex": ["_IO_RS]{~(%04NF]CUA5MU0", "_IO_RS]{~(%04NF]CUA5MU0", "F68WXQMVZK6`S@[WFVJQ_KN", "F68WXQMVZK6`S@[WFVJQ_KN"]
}, {
	"word": "价值连城",
	"hex": ["F68WXQMVZK6`S@[WFVJQ_KN", "U[9LEL_ZD%4EEUK1K[W$HIR", "9`2MO}ITWT5X2ZIKD3V(6GX", "YY7V0_QB_T(D@[)%2[1T${6"]
}, {
	"word": "见微知著",
	"hex": ["U]AOJ}6BICTK[L(1@GX[$F4", "}G][OE]`UZNQ)7$[8Z6R_NL", "7O~23UIC5ULYTVY_W@W}}8R", "X`XX$4}QX3X5YG3G_T_G6ZS"]
}, {
	"word": "狡兔三窟",
	"hex": ["9N004]A}RAC%@[{BYTCLZXO", "{MYM5{_SRSE[%08FW4D~}%D", "W$FA5[ZS2ER}_L]K_5RP5GA", "E88GZPUWFVDHABP)KB6_FYJ"]
}, {
	"word": "今生今世",
	"hex": ["5R5CSIFU0`)D~W@%_K4J76A", "5`IG]4CLF7[EV~$04KJN2MT", "5R5CSIFU0`)D~W@%_K4J76A", "4I`MDUI8B2C]KU_[AI$HZ_Y"]
}, {
	"word": "镜花水月",
	"hex": ["(E7SZT)[KP1E`K4)6IRS))J", "S}Q{_~S0S{NMC1VAKGKD9]3", "WK{C~[E(`I%TY@ILZKWW_TD", "2}JB2}6{KGC{CX9)~WQ{%Z7"]
}, {
	"word": "九九归一",
	"hex": ["4I86L{PT)W]SS5XEJP{ZE)Y", "2%QUC6W)F0~4$@YI0D1_2UM", "OMINO(K}(B(R0B($2$YWMV3", "ZPH0$A6OV{2KGN1KU39@S`1"]
}, {
	"word": "九九归一",
	"hex": ["HV{VBFX_MX]JNO8YP1957NW", "G@][K9HS$MCNI4I_Z8GUQ}J", "OMINO(K}(B(R0B($2$YWMV3", "W{{EP)36E7LF_%G(M6AP_ZV"]
}, {
	"word": "九流三教",
	"hex": ["~FBGH]Z7JZTN4(F)FMY_E3K", "L0D3GS0D~({~U9_GAH{8CLS", "W$FA5[ZS2ER}_L]K_5RP5GA", "9N004]A}RAC%@[{BYTCLZXO"]
}, {
	"word": "九牛二虎",
	"hex": ["HV{VBFX_MX]JNO8YP1957NW", "SR68QL(U%TT_%VM[@)@~Q)I", "[OC)VVH6G[RVDWKN~@94[U4", "HJ[KUDU4}DMJXB{FYL4`XJR"]
}, {
	"word": "九牛一毛",
	"hex": ["_~@(@LPT$030X%QB3UYUV46", "SR68QL(U%TT_%VM[@)@~Q)I", "S8I1UYSA3E1_CZG9HMVW]QL", "FH%LFXKZAEE3INWUH%8{(5N"]
}, {
	"word": "九牛一毛",
	"hex": ["HV{VBFX_MX]JNO8YP1957NW", "M3ZK[)X98@STN2$LHCXF()K", "ZPH0$A6OV{2KGN1KU39@S`1", "FH%LFXKZAEE3INWUH%8{(5N"]
}, {
	"word": "九死一生",
	"hex": ["~FBGH]Z7JZTN4(F)FMY_E3K", "C}}[~6B3~6[2O[(Y0$ALOPW", "2F$CIZC%OLL%IC~3N)K}3YD", "W$FA5[ZS2ER}_L]K_5RP5GA"]
}, {
	"word": "举足轻重",
	"hex": ["YY7V0_QB_T(D@[)%2[1T${6", "9N004]A}RAC%@[{BYTCLZXO", "08[SR[4K9`VV~OC]~L[AQT5", "N3B7{O70B_]ZJR%N7~IQ)YN"]
}, {
	"word": "开门见山",
	"hex": ["H5QU[_H(1B{[USU{A8Y(YBR", "`K$AAJO3SY4I)WYTE9OJL)R", "EYVX1X)P~31U$)~[_GU9SEQ", "]OVVCH2HZO]H3)@)~{WL[NS"]
}, {
	"word": "可歌可泣",
	"hex": ["JS{H3PKBG[6_NFME4%FUH29", "[EX)AYH%VKFZVRVBG1{_A}1", "JS{H3PKBG[6_NFME4%FUH29", "E88GZPUWFVDHABP)KB6_FYJ"]
}, {
	"word": "刻舟求剑",
	"hex": ["VG$6@OTYR@QD4(6D%%7O]EL", "2N{DEO%YOZB6Z8G`X_Q0[OI", "OBUYB]DH{3G3K21[[6~X{S8", "U]AOJ}6BICTK[L(1@GX[$F4"]
}, {
	"word": "孔武有力",
	"hex": ["%PE{B8W}_YEGXHC_D_IK~(G", "AMZ)2V[2HY5G_S[{Y}T(UJE", "G7P32E%(P61T)I@1OTHJ)BX", "61$BXZ_VQ@9G}QEE$@(RQ[F"]
}, {
	"word": "口口声声",
	"hex": ["LLYXF9H612_TOKXXX}$`K@8", "LLYXF9H612_TOKXXX}$`K@8", "}(RN2MMJPE2RM0CQI8YZ652", "}(RN2MMJPE2RM0CQI8YZ652"]
}, {
	"word": "口蜜腹剑",
	"hex": ["LLYXF9H612_TOKXXX}$`K@8", "_F$J3PD8@Z@6N7`CY1E%%_D", "5R5CSIFU0`)D~W@%_K4J76A", "U]AOJ}6BICTK[L(1@GX[$F4"]
}, {
	"word": "口是心非",
	"hex": ["08[SR[4K9`VV~OC]~L[AQT5", "D4H6J(90(WSZZ%TRSGKHP$A", "%Z4%@]JSA0%O[(N[}HTN7MJ", "CA7_46}C7S9A$Z~I_49K_AM"]
}, {
	"word": "枯树生华",
	"hex": ["E88GZPUWFVDHABP)KB6_FYJ", "ZCMNP)I@H0]I2~NUZRM@9QR", "CI]~O3RMBK$FMEM]ZP$SQQ7", "FZK9(CP}P_K5@GCZ${{PW]B"]
}, {
	"word": "哭笑不得",
	"hex": ["E88GZPUWFVDHABP)KB6_FYJ", "8OEVOVTI$OO0CVL(]4M6EX8", "CA7_46}C7S9A$Z~I_49K_AM", "S1)M$FXSIM3K2ROB3LKY$$1"]
}, {
	"word": "苦口婆心",
	"hex": ["__)KY`R7~N~6GK3D3`H7ZQJ", "08[SR[4K9`VV~OC]~L[AQT5", "(]II5ZE)9K8UV0P2}17Y7{5", "3`Z3CZ~LS7N2UJZH)25@4LK"]
}, {
	"word": "苦中作乐",
	"hex": ["E88GZPUWFVDHABP)KB6_FYJ", "@XY]@EKJCOGR0}JAG2CD50J", "L$RP[GTOWP}H`6R~4@V1D99", "QBHO~D%B_59OH5TDLN0$I5X"]
}, {
	"word": "狼心狗肺",
	"hex": ["@(E_MLX3JTZKN)1M(OSN0@S", "9KE3SIPIL{T0F~)03A%[(TA", ")O6WIX$`F195J{R@5JFL(I4", "KU~V2S)[7AAGOAP~)FZZ7C3"]
}, {
	"word": "狼烟四起",
	"hex": ["@(E_MLX3JTZKN)1M(OSN0@S", "ALJ4@UAID6IC4VGE4B4)IHK", "C}}[~6B3~6[2O[(Y0$ALOPW", "21X4~YA]5(_62K`$}$HJ1GM"]
}, {
	"word": "乐不思蜀",
	"hex": ["QBHO~D%B_59OH5TDLN0$I5X", "CA7_46}C7S9A$Z~I_49K_AM", "C}}[~6B3~6[2O[(Y0$ALOPW", "ZCMNP)I@H0]I2~NUZRM@9QR"]
}, {
	"word": "乐极生悲",
	"hex": ["QBHO~D%B_59OH5TDLN0$I5X", "{_[QO$DW7DB_0YBWCYOYU_9", "G7P32E%(P61T)I@1OTHJ)BX", "E88GZPUWFVDHABP)KB6_FYJ"]
}, {
	"word": "雷声震耳",
	"hex": ["P{8L7H%`L73GHM%9KYRWT`J", "BSE]Y{KOQ8$I1K41{(WB9Q2", "R5N]H_QN65HE@E`VE0SM]NN", "$8P3)ZLAZA{HX%[VDN8T%YA"]
}, {
	"word": "泪流满面",
	"hex": ["WK{C~[E(`I%TY@ILZKWW_TD", "SR68QL(U%TT_%VM[@)@~Q)I", "2%QUC6W)F0~4$@YI0D1_2UM", "PT@NJ)3`Y@KOF64N0CORX}O"]
}, {
	"word": "梨花带雨",
	"hex": [")ZFFI8_1[~00WG)JD[[MGUR", "1A2L{B}FUPY008~[20I014A", "5R5CSIFU0`)D~W@%_K4J76A", "7RQ9HSMQVR2E88P8GQ6D7[0"]
}, {
	"word": "力不从心",
	"hex": [")ZFFI8_1[~00WG)JD[[MGUR", "CA7_46}C7S9A$Z~I_49K_AM", "I67`OP146{PNF9U5ZHLP6ZK", "%Z4%@]JSA0%O[(N[}HTN7MJ"]
}, {
	"word": "两败俱伤",
	"hex": ["[OC)VVH6G[RVDWKN~@94[U4", "KGM`}K($2K1DIXW}A$J`YL6", "YY7V0_QB_T(D@[)%2[1T${6", "(4S4Y1}AT[XSCJ@(T3GQ@YN"]
}, {
	"word": "两手空空",
	"hex": ["S$V[8IML7B`@]B39XWZ3VIF", "WEHWKB]G582CZXBLTP}L3]1", "%PE{B8W}_YEGXHC_D_IK~(G", "%PE{B8W}_YEGXHC_D_IK~(G"]
}, {
	"word": "两叶掩目",
	"hex": ["S$V[8IML7B`@]B39XWZ3VIF", "(FNXNDEG{NP}{J`D$VJ7ZZ4", "ALJ4@UAID6IC4VGE4B4)IHK", "H@ZU({0Q5VV](7D%KQ%(9}Q"]
}, {
	"word": "两意三心",
	"hex": ["[OC)VVH6G[RVDWKN~@94[U4", "S8I1UYSA3E1_CZG9HMVW]QL", "W$FA5[ZS2ER}_L]K_5RP5GA", "3`Z3CZ~LS7N2UJZH)25@4LK"]
}, {
	"word": "琳琅满目",
	"hex": ["J{34WCZ65PYFJ`PC~M0BY`I", "@(E_MLX3JTZKN)1M(OSN0@S", "HM{1WCZO0{SZ7YQGWGV9H~I", "H@ZU({0Q5VV](7D%KQ%(9}Q"]
}, {
	"word": "零零星星",
	"hex": ["J{34WCZ65PYFJ`PC~M0BY`I", "J{34WCZ65PYFJ`PC~M0BY`I", "T0W1F%X~NBVCQ$RG52L0EE6", "T0W1F%X~NBVCQ$RG52L0EE6"]
}, {
	"word": "令人注目",
	"hex": ["J{34WCZ65PYFJ`PC~M0BY`I", "K5QCTA@FP[22%0ZZZ[{`~`O", "X`XX$4}QX3X5YG3G_T_G6ZS", "H@ZU({0Q5VV](7D%KQ%(9}Q"]
}, {
	"word": "六亲不认",
	"hex": ["15{UML[W@U{DUUS(DBGWS}I", "2H5Z3JF[9{P0}I[6M99%%@E", "CA7_46}C7S9A$Z~I_49K_AM", "9`2MO}ITWT5X2ZIKD3V(6GX"]
}, {
	"word": "六神无主",
	"hex": ["15{UML[W@U{DUUS(DBGWS}I", "%U~)P7%{DX]22C379~6)YQM", "Y~YS3_QCBLR9OCYKPO@V_48", "X`XX$4}QX3X5YG3G_T_G6ZS"]
}, {
	"word": "龙飞凤舞",
	"hex": ["~}6SZVI`1U_EZLPFUHP7XMQ", "KU~V2S)[7AAGOAP~)FZZ7C3", "55@K8DLC{G57OZ8D27BMXYD", "3I7IF}4TKE@56{EYG%D63HF"]
}, {
	"word": "龙凤呈祥",
	"hex": ["~}6SZVI`1U_EZLPFUHP7XMQ", "DPX%]3EL4C%GG5B{~(Z)[@G", "YY7V0_QB_T(D@[)%2[1T${6", "I`Q{A5T7DK7QUG@~%L46]3T"]
}, {
	"word": "龙虎风云",
	"hex": ["]1$V5DDXRZ6QSQHTC5J}5`Q", "Y7M$L13B{$D)$EI@}U4HALY", "2X5_U{YMX}]NGLP{8O5@B3F", "[LVE`85IMDE4JWP1U4@LY77"]
}, {
	"word": "龙马精神",
	"hex": ["~}6SZVI`1U_EZLPFUHP7XMQ", "CFO08B9LWOBHYV_G}Y5ZUB3", "~DA422Z_P[`TJ3Z$6HM2}$M", "%U~)P7%{DX]22C379~6)YQM"]
}, {
	"word": "龙盘虎踞",
	"hex": ["]1$V5DDXRZ6QSQHTC5J}5`Q", ")_5VT22`8V5U9IQZ77(~_LP", "HJ[KUDU4}DMJXB{FYL4`XJR", "YY7V0_QB_T(D@[)%2[1T${6"]
}, {
	"word": "马到成功",
	"hex": ["CFO08B9LWOBHYV_G}Y5ZUB3", "5C062Z@`4W[FS6PH~ACJ2M9", "YY7V0_QB_T(D@[)%2[1T${6", "]OPQAGC__XOKN7OR9Y_AS7W"]
}, {
	"word": "马革裹尸",
	"hex": ["K5QCTA@FP[22%0ZZZ[{`~`O", "N9ZX}8Q9}7{@2)FSK`4)YD6", "CFO08B9LWOBHYV_G}Y5ZUB3", "I`Q{A5T7DK7QUG@~%L46]3T"]
}, {
	"word": "马马虎虎",
	"hex": ["CFO08B9LWOBHYV_G}Y5ZUB3", "CFO08B9LWOBHYV_G}Y5ZUB3", "HJ[KUDU4}DMJXB{FYL4`XJR", "HJ[KUDU4}DMJXB{FYL4`XJR"]
}, {
	"word": "马马虎虎",
	"hex": ["I8F[Y~8KB%J668[5JV6[)GI", "I8F[Y~8KB%J668[5JV6[)GI", "Y7M$L13B{$D)$EI@}U4HALY", "Y7M$L13B{$D)$EI@}U4HALY"]
}, {
	"word": "卖狗悬羊",
	"hex": ["4}`$0~M8@S9VIB9{WQCC6A2", "@(E_MLX3JTZKN)1M(OSN0@S", "O72%G]PWNNFRCU4VII4US`1", "(U(PG5TXDO]EU{C]RKL}OC5"]
}, {
	"word": "满面红光",
	"hex": ["HM{1WCZO0{SZ7YQGWGV9H~I", "PT@NJ)3`Y@KOF64N0CORX}O", "T5Y%}K]$1N)}MAF3ZI1C1SD", "`YHSF96PG%UT295}P(%Y6RY"]
}, {
	"word": "漫天要价",
	"hex": ["HM{1WCZO0{SZ7YQGWGV9H~I", "[LVE`85IMDE4JWP1U4@LY77", "H5QU[_H(1B{[USU{A8Y(YBR", "F68WXQMVZK6`S@[WFVJQ_KN"]
}, {
	"word": "盲人摸象",
	"hex": ["FAPFWK756K~$K[5@I$L$Z)U", "K5QCTA@FP[22%0ZZZ[{`~`O", "TP2H[}K$%03{2[LRA@2TL5H", ")87BIFAMB2[SCJDT6Q1478L"]
}, {
	"word": "眉目传情",
	"hex": ["1A2L{B}FUPY008~[20I014A", "H@ZU({0Q5VV](7D%KQ%(9}Q", "@X%LIHMW0ZX_%8YS3J$FHWI", "_((F]@6VI~6CV@1{KSNH]%Q"]
}, {
	"word": "美中不足",
	"hex": ["4`[I%N%JP0QIQHL}XS`J)JS", "@XY]@EKJCOGR0}JAG2CD50J", "CA7_46}C7S9A$Z~I_49K_AM", "9N004]A}RAC%@[{BYTCLZXO"]
}, {
	"word": "面无人色",
	"hex": ["PT@NJ)3`Y@KOF64N0CORX}O", "[WLXVKQ2]XJ~JLCPV]Q))1R", "BI]EBT7[F%0T%T$A3LZZWC3", "69}2F]68[%4O6U{2Y_1IC21"]
}, {
	"word": "鸣金收兵",
	"hex": ["{S_A[Q8)IW7Y94X4M3%BD92", "5R5CSIFU0`)D~W@%_K4J76A", "WEHWKB]G582CZXBLTP}L3]1", "(~8AS`1L)`8$PLMSZGTRJ25"]
}, {
	"word": "目空一世",
	"hex": ["H@ZU({0Q5VV](7D%KQ%(9}Q", "%PE{B8W}_YEGXHC_D_IK~(G", "W1EA85T_V7FV2WWWPX3WGWC", "4I`MDUI8B2C]KU_[AI$HZ_Y"]
}, {
	"word": "沐猴衣冠",
	"hex": ["%LA9$X7$}7{[DU[ACYYW9%V", "H{DVOHBB@H_Y@%_~6SY@BLH", "]IHIRB3O8_TXW)R_VQA04ME", "~E@]3OJ9)($G[5H){YS)1FI"]
}, {
	"word": "男才女貌",
	"hex": ["9`2MO}ITWT5X2ZIKD3V(6GX", "5R5CSIFU0`)D~W@%_K4J76A", "Y$LZ%FBUMI8%%{NQ`[WW1(G", "AH4]U3`B(T$TW(}JVZOWTNA"]
}, {
	"word": "男欢女爱",
	"hex": ["N~55(SH2R88N@PZ2P(XA$LS", "$I38NJS)X`4TKVL$T0DU8Q5", "3I7IF}4TKE@56{EYG%D63HF", "_16SI2TQSH2$RUN1X5YLA]H"]
}, {
	"word": "男女老少",
	"hex": ["9`2MO}ITWT5X2ZIKD3V(6GX", "Y$LZ%FBUMI8%%{NQ`[WW1(G", "]OPQAGC__XOKN7OR9Y_AS7W", "[G(%2_6W150S2`Q3LVPBAPL"]
}, {
	"word": "难以置信",
	"hex": ["K5QCTA@FP[22%0ZZZ[{`~`O", "]IHIRB3O8_TXW)R_VQA04ME", "DI@YVYF9P`FG@Y[IHW4IKUI", "(L2IJHCN5I9(U`GSWKILR7W"]
}, {
	"word": "鸟语花香",
	"hex": ["_WK@R[~_{97BBZW725)}0MB", "8X{2XF@`KSE_`P2XB@ZADUY", "FZK9(CP}P_K5@GCZ${{PW]B", "~GVC1(2_HZE@IEZYWL[}P0Q"]
}, {
	"word": "牛鬼蛇神",
	"hex": ["SR68QL(U%TT_%VM[@)@~Q)I", "H`)[_ZAMAN0}0~AL[3$_LUJ", "~BC@S4$74D~{RV$3M5W~6(F", "%U~)P7%{DX]22C379~6)YQM"]
}, {
	"word": "牛郎织女",
	"hex": ["M3ZK[)X98@STN2$LHCXF()K", "9`2MO}ITWT5X2ZIKD3V(6GX", "U[9LEL_ZD%4EEUK1K[W$HIR", "BI]EBT7[F%0T%T$A3LZZWC3"]
}, {
	"word": "牛头马面",
	"hex": ["M3ZK[)X98@STN2$LHCXF()K", "9`2MO}ITWT5X2ZIKD3V(6GX", "CFO08B9LWOBHYV_G}Y5ZUB3", "PT@NJ)3`Y@KOF64N0CORX}O"]
}, {
	"word": "怒火中烧",
	"hex": ["VBU%_J2QL2FGS5WYNIS%7UA", "S~LW`Y7C8DV}Q91QC%Q`6HH", "@XY]@EKJCOGR0}JAG2CD50J", "S~LW`Y7C8DV}Q91QC%Q`6HH"]
}, {
	"word": "萍水相逢",
	"hex": ["N9ZX}8Q9}7{@2)FSK`4)YD6", "WK{C~[E(`I%TY@ILZKWW_TD", ")87BIFAMB2[SCJDT6Q1478L", "_F$J3PD8@Z@6N7`CY1E%%_D"]
}, {
	"word": "七老八十",
	"hex": ["6@@%PI]IHWAT~)JS(ZZ7B74", "]OPQAGC__XOKN7OR9Y_AS7W", "4U9HLYEAVVAXM_P5_72])4D", "U1KZUP_TP35PUE3H8E1OYCN"]
}, {
	"word": "七上八下",
	"hex": ["UCI28L%UKTDML5H7{`VRYMU", "5`IG]4CLF7[EV~$04KJN2MT", "7_6}{HVJGCUK`RLR2O~%)H4", "5C062Z@`4W[FS6PH~ACJ2M9"]
}, {
	"word": "七手八脚",
	"hex": ["6@@%PI]IHWAT~)JS(ZZ7B74", "WEHWKB]G582CZXBLTP}L3]1", "4U9HLYEAVVAXM_P5_72])4D", "9N004]A}RAC%@[{BYTCLZXO"]
}, {
	"word": "七嘴八舌",
	"hex": ["1TJ~1QD5AX6UC2%QXPS(DVF", "08[SR[4K9`VV~OC]~L[AQT5", "7_6}{HVJGCUK`RLR2O~%)H4", "LS4[EIC9QDFH3SJQ3)5}A~9"]
}, {
	"word": "七嘴八舌",
	"hex": ["6@@%PI]IHWAT~)JS(ZZ7B74", "LLYXF9H612_TOKXXX}$`K@8", "4U9HLYEAVVAXM_P5_72])4D", "LS4[EIC9QDFH3SJQ3)5}A~9"]
}, {
	"word": "齐心协力",
	"hex": ["21X4~YA]5(_62K`$}$HJ1GM", "%Z4%@]JSA0%O[(N[}HTN7MJ", "L%GHCHLD0Y@~KA[]7Z~8)BJ", "7[R844}%0OFGK]5`{V[WK)N"]
}, {
	"word": "骑虎难下",
	"hex": ["1TJ~1QD5AX6UC2%QXPS(DVF", "Y7M$L13B{$D)$EI@}U4HALY", "9`2MO}ITWT5X2ZIKD3V(6GX", "5C062Z@`4W[FS6PH~ACJ2M9"]
}, {
	"word": "千夫所指",
	"hex": ["W_{X5~JJYUQS]Y`UBN2F5TH", "9`2MO}ITWT5X2ZIKD3V(6GX", "1)O2N_6Q5IRJUCEG0[DY6A5", "UN~W8Q(LVE@`~FC}J6GH5)W"]
}, {
	"word": "千秋万世",
	"hex": ["W_{X5~JJYUQS]Y`UBN2F5TH", "_}E0{J`58{0@F5}6A_W(C@I", "}TE)237S}Z~V(0$$BQNJWYI", "4I`MDUI8B2C]KU_[AI$HZ_Y"]
}, {
	"word": "千人一面",
	"hex": ["U72BWH28@7AMPMT7B}]}7~F", "N~55(SH2R88N@PZ2P(XA$LS", "ZPH0$A6OV{2KGN1KU39@S`1", "K5QCTA@FP[22%0ZZZ[{`~`O"]
}, {
	"word": "前车之鉴",
	"hex": ["W_{X5~JJYUQS]Y`UBN2F5TH", "EUH[KFYN}V}9V77POVH{0(S", "DI@YVYF9P`FG@Y[IHW4IKUI", "U]AOJ}6BICTK[L(1@GX[$F4"]
}, {
	"word": "前俯后仰",
	"hex": ["5R5CSIFU0`)D~W@%_K4J76A", "_RTFARG(NUO_IULGEQZAU3C", "H{DVOHBB@H_Y@%_~6SY@BLH", "S4%9(NSX233_$DH44TTTBCI"]
}, {
	"word": "枪林弹雨",
	"hex": ["%G1B`SA[CGDEPJZ~3(Q_7N6", "G)JTAC)5{V(NO[]`%D(T[OL", "P{8L7H%`L73GHM%9KYRWT`J", "8X{2XF@`KSE_`P2XB@ZADUY"]
}, {
	"word": "琴棋书画",
	"hex": ["_](PF0PC@R8D_ZM{5PN]RP7", "21X4~YA]5(_62K`$}$HJ1GM", "9SD[~NZG6E3UZ6KB(_@TUIR", "F9}3}{RYT(0(VWVJIB5%MNQ"]
}, {
	"word": "青梅竹马",
	"hex": ["TZT[YE~(`_8]DR24()2DPK4", "1A2L{B}FUPY008~[20I014A", "([`P3%60WO87HKO_G36S%OS", "CFO08B9LWOBHYV_G}Y5ZUB3"]
}, {
	"word": "求仁得仁",
	"hex": ["OBUYB]DH{3G3K21[[6~X{S8", "K5QCTA@FP[22%0ZZZ[{`~`O", "S1)M$FXSIM3K2ROB3LKY$$1", "K5QCTA@FP[22%0ZZZ[{`~`O"]
}, {
	"word": "群龙无首",
	"hex": ["AO]0~{Y8JRBPW9$%80[SPJ8", "~}6SZVI`1U_EZLPFUHP7XMQ", "P4P[MSA1(J2ZBDY29MI0(%O", "WEHWKB]G582CZXBLTP}L3]1"]
}, {
	"word": "人才济济",
	"hex": ["Y$LZ%FBUMI8%%{NQ`[WW1(G", "5R5CSIFU0`)D~W@%_K4J76A", "%WLIU6QE1T[XIU~H%{TW%%7", "%WLIU6QE1T[XIU~H%{TW%%7"]
}, {
	"word": "人财两空",
	"hex": ["BI]EBT7[F%0T%T$A3LZZWC3", "5R5CSIFU0`)D~W@%_K4J76A", "[OC)VVH6G[RVDWKN~@94[U4", "%PE{B8W}_YEGXHC_D_IK~(G"]
}, {
	"word": "人面兽心",
	"hex": ["K5QCTA@FP[22%0ZZZ[{`~`O", "FR3WXQG71W_P7HSC%Q3}9TL", "A](3){YOPFTY@MF(7W6D394", "%Z4%@]JSA0%O[(N[}HTN7MJ"]
}, {
	"word": "人面桃花",
	"hex": ["G7P32E%(P61T)I@1OTHJ)BX", "PT@NJ)3`Y@KOF64N0CORX}O", "ZLOI%S]LAYZ}_R99V~[5$[L", "R@SGMDL7Z3M$U7454`4PV`8"]
}, {
	"word": "人琴俱逝",
	"hex": ["BI]EBT7[F%0T%T$A3LZZWC3", "PNXM$AIU7YB9E5J$SLV(K95", "YY7V0_QB_T(D@[)%2[1T${6", "D4H6J(90(WSZZ%TRSGKHP$A"]
}, {
	"word": "人山人海",
	"hex": ["ZCB4MRC0JOD@Y(E(J[TDRYL", "]OVVCH2HZO]H3)@)~{WL[NS", "ZCB4MRC0JOD@Y(E(J[TDRYL", "H$KAZU9@$4)DZM$8$9TRYD0"]
}, {
	"word": "人神共愤",
	"hex": ["9`2MO}ITWT5X2ZIKD3V(6GX", "%U~)P7%{DX]22C379~6)YQM", "O)U47U5QA$@J%SDTR50XXFL", "I`Q{A5T7DK7QUG@~%L46]3T"]
}, {
	"word": "人事不醒",
	"hex": ["K5QCTA@FP[22%0ZZZ[{`~`O", "I`Q{A5T7DK7QUG@~%L46]3T", "P4P[MSA1(J2ZBDY29MI0(%O", "~DA422Z_P[`TJ3Z$6HM2}$M"]
}, {
	"word": "人仰马翻",
	"hex": ["K5QCTA@FP[22%0ZZZ[{`~`O", "E39{U37D$M(J0D{`}3(1DWJ", "I8F[Y~8KB%J668[5JV6[)GI", "JF1@CW8DF5PKJ2]R7VSGJJ8"]
}, {
	"word": "人走茶凉",
	"hex": ["BI]EBT7[F%0T%T$A3LZZWC3", ")PZ`J]2JBM~S@(EQ}O$}MM6", "YUD]ZI6K~BA~96ZZMTH3N_5", "Y79AZ$NLICT2_ZK5NZLU[`T"]
}, {
	"word": "日日夜夜",
	"hex": ["4HJ(B7S{63[%3%~D99RLCKV", "4HJ(B7S{63[%3%~D99RLCKV", "OE}5IQ)176(~_GCB84_L%@M", "OE}5IQ)176(~_GCB84_L%@M"]
}, {
	"word": "日日夜夜",
	"hex": ["IQ9@C~H76NQW{DB~_I)K)BV", "IQ9@C~H76NQW{DB~_I)K)BV", "D]L]DI8DC%1)7F24$O{}`PC", "D]L]DI8DC%1)7F24$O{}`PC"]
}, {
	"word": "日新月异",
	"hex": ["{~P9ANL%EB4$8}B(1V0HT_4", "%Z4%@]JSA0%O[(N[}HTN7MJ", "2}JB2}6{KGC{CX9)~WQ{%Z7", "ZPH0$A6OV{2KGN1KU39@S`1"]
}, {
	"word": "日月无光",
	"hex": ["{~P9ANL%EB4$8}B(1V0HT_4", "2}JB2}6{KGC{CX9)~WQ{%Z7", "[WLXVKQ2]XJ~JLCPV]Q))1R", "`YHSF96PG%UT295}P(%Y6RY"]
}, {
	"word": "三从四德",
	"hex": ["~TPINOW{}WLMRD_IMJUNQZW", "4}`$0~M8@S9VIB9{WQCC6A2", "5C2NMMQTKNNPKO1RVMPMJBD", "S1)M$FXSIM3K2ROB3LKY$$1"]
}, {
	"word": "三皇五帝",
	"hex": ["FH}U1L6(Q%6(I~U~0S)05A6", "}H%{L_DRT[OE8]GI}6_4K2N", "WEHWKB]G582CZXBLTP}L3]1", "0JL)TDER1RT9%}4@NKJB4DX"]
}, {
	"word": "三人成虎",
	"hex": ["FH}U1L6(Q%6(I~U~0S)05A6", "N~55(SH2R88N@PZ2P(XA$LS", "YY7V0_QB_T(D@[)%2[1T${6", "HJ[KUDU4}DMJXB{FYL4`XJR"]
}, {
	"word": "三五成群",
	"hex": ["FH}U1L6(Q%6(I~U~0S)05A6", "WEHWKB]G582CZXBLTP}L3]1", "YY7V0_QB_T(D@[)%2[1T${6", "AO]0~{Y8JRBPW9$%80[SPJ8"]
}, {
	"word": "三心二意",
	"hex": ["~TPINOW{}WLMRD_IMJUNQZW", "3`Z3CZ~LS7N2UJZH)25@4LK", "S$V[8IML7B`@]B39XWZ3VIF", "S8I1UYSA3E1_CZG9HMVW]QL"]
}, {
	"word": "三羊开泰",
	"hex": ["FH}U1L6(Q%6(I~U~0S)05A6", "E39{U37D$M(J0D{`}3(1DWJ", "EUH[KFYN}V}9V77POVH{0(S", "{~P9ANL%EB4$8}B(1V0HT_4"]
}, {
	"word": "上下一心",
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "4W}[)MLG0FZP)}PCEI@1LK7", "S8I1UYSA3E1_CZG9HMVW]QL", "%Z4%@]JSA0%O[(N[}HTN7MJ"]
}, {
	"word": "蛇鼠一窝",
	"hex": ["~BC@S4$74D~{RV$3M5W~6(F", "FF1ITH`(@Z$20Y%J%}_3YNJ", "]IHIRB3O8_TXW)R_VQA04ME", "_IO_RS]{~(%04NF]CUA5MU0"]
}, {
	"word": "蛇鼠一窝",
	"hex": ["~BC@S4$74D~{RV$3M5W~6(F", "FF1ITH`(@Z$20Y%J%}_3YNJ", "{DWVE`UPU5}UWI%M76NUFBK", "NP`}]6~6ZXRJ8(`~$14JHFJ"]
}, {
	"word": "舍己救人",
	"hex": ["F@KZ6_536)JK$EJGUNNQRES", "6OL[HQ0DBD4F`~Y}YJGW)@A", "_~@(@LPT$030X%QB3UYUV46", "BI]EBT7[F%0T%T$A3LZZWC3"]
}, {
	"word": "生龙活虎",
	"hex": ["CI]~O3RMBK$FMEM]ZP$SQQ7", "]1$V5DDXRZ6QSQHTC5J}5`Q", "S~LW`Y7C8DV}Q91QC%Q`6HH", "Y7M$L13B{$D)$EI@}U4HALY"]
}, {
	"word": "声色犬马",
	"hex": ["QKDJBH_KO4YG4F[3{(ZUB[F", "69}2F]68[%4O6U{2Y_1IC21", ")O6WIX$`F195J{R@5JFL(I4", "CFO08B9LWOBHYV_G}Y5ZUB3"]
}, {
	"word": "十风五雨",
	"hex": ["U1KZUP_TP35PUE3H8E1OYCN", "2X5_U{YMX}]NGLP{8O5@B3F", "AMZ)2V[2HY5G_S[{Y}T(UJE", "8X{2XF@`KSE_`P2XB@ZADUY"]
}, {
	"word": "十面埋伏",
	"hex": ["D4H6J(90(WSZZ%TRSGKHP$A", "9`2MO}ITWT5X2ZIKD3V(6GX", "4}`$0~M8@S9VIB9{WQCC6A2", "_RTFARG(NUO_IULGEQZAU3C"]
}, {
	"word": "十全十美",
	"hex": ["U1KZUP_TP35PUE3H8E1OYCN", "[){9G]{F}PKKQ3C`@(E1F]3", "D4H6J(90(WSZZ%TRSGKHP$A", "2AFK2EFJI{J]]KQPLBVBULM"]
}, {
	"word": "十全十美",
	"hex": ["W``GSE)8(Z75KX3%~0IR@IP", "[){9G]{F}PKKQ3C`@(E1F]3", "4I`MDUI8B2C]KU_[AI$HZ_Y", "4`[I%N%JP0QIQHL}XS`J)JS"]
}, {
	"word": "十生九死",
	"hex": ["U1KZUP_TP35PUE3H8E1OYCN", "CI]~O3RMBK$FMEM]ZP$SQQ7", "~FBGH]Z7JZTN4(F)FMY_E3K", "~2TW7Q@6@M7CNA7JLN`LMTF"]
}, {
	"word": "十十五五",
	"hex": ["U1KZUP_TP35PUE3H8E1OYCN", "U1KZUP_TP35PUE3H8E1OYCN", "[WLXVKQ2]XJ~JLCPV]Q))1R", "[WLXVKQ2]XJ~JLCPV]Q))1R"]
}, {
	"word": "十指连心",
	"hex": ["I`Q{A5T7DK7QUG@~%L46]3T", "WEHWKB]G582CZXBLTP}L3]1", "BI]EBT7[F%0T%T$A3LZZWC3", "%Z4%@]JSA0%O[(N[}HTN7MJ"]
}, {
	"word": "史无前例",
	"hex": ["D4H6J(90(WSZZ%TRSGKHP$A", "[WLXVKQ2]XJ~JLCPV]Q))1R", "5R5CSIFU0`)D~W@%_K4J76A", "B[DEJO8DJ}B{`D63R}Y7X`E"]
}, {
	"word": "市不二价",
	"hex": ["D4H6J(90(WSZZ%TRSGKHP$A", "CA7_46}C7S9A$Z~I_49K_AM", "[OC)VVH6G[RVDWKN~@94[U4", "F68WXQMVZK6`S@[WFVJQ_KN"]
}, {
	"word": "手高眼低",
	"hex": ["WEHWKB]G582CZXBLTP}L3]1", "OHNQ$PJY6PRF)_H7)3}YK0N", "H@ZU({0Q5VV](7D%KQ%(9}Q", "5XSW_8$4YN`R]8YVHS}(@ZX"]
}, {
	"word": "手舞足蹈",
	"hex": ["WEHWKB]G582CZXBLTP}L3]1", "3I7IF}4TKE@56{EYG%D63HF", "M~GU)Y4A%MWQHU%O))DC5(M", "%K7OD)XHUEJWT$C{OG8K4[4"]
}, {
	"word": "手足无措",
	"hex": ["WEHWKB]G582CZXBLTP}L3]1", "9N004]A}RAC%@[{BYTCLZXO", "%PE{B8W}_YEGXHC_D_IK~(G", "P4P[MSA1(J2ZBDY29MI0(%O"]
}, {
	"word": "守株待兔",
	"hex": ["ORUJRJR{NYZNJ0%}(GCNMRW", "X`XX$4}QX3X5YG3G_T_G6ZS", "C~MG1FH}@_D8ZODVZCTPPP3", "{MYM5{_SRSE[%08FW4D~}%D"]
}, {
	"word": "首屈一指",
	"hex": ["M`~3D}X5CJY~PJ${)[}[ZCS", "EFPTN`5L2WLUXWFC8QG~83T", "2F$CIZC%OLL%IC~3N)K}3YD", "UN~W8Q(LVE@`~FC}J6GH5)W"]
}, {
	"word": "授受不亲",
	"hex": ["WEHWKB]G582CZXBLTP}L3]1", "WEHWKB]G582CZXBLTP}L3]1", "P4P[MSA1(J2ZBDY29MI0(%O", "WRXK(N(M~9PI`W}$}68UD$P"]
}, {
	"word": "水木清华",
	"hex": ["WK{C~[E(`I%TY@ILZKWW_TD", "G)JTAC)5{V(NO[]`%D(T[OL", "TZT[YE~(`_8]DR24()2DPK4", "FZK9(CP}P_K5@GCZ${{PW]B"]
}, {
	"word": "四海一家",
	"hex": ["5C2NMMQTKNNPKO1RVMPMJBD", "H$KAZU9@$4)DZM$8$9TRYD0", "ZPH0$A6OV{2KGN1KU39@S`1", "08}R}[E1Z%ORTX~7622%{@9"]
}, {
	"word": "四面楚歌",
	"hex": ["5C2NMMQTKNNPKO1RVMPMJBD", "PT@NJ)3`Y@KOF64N0CORX}O", "(E7SZT)[KP1E`K4)6IRS))J", "[EX)AYH%VKFZVRVBG1{_A}1"]
}, {
	"word": "肆无忌惮",
	"hex": ["C}}[~6B3~6[2O[(Y0$ALOPW", "CA7_46}C7S9A$Z~I_49K_AM", "%WLIU6QE1T[XIU~H%{TW%%7", "]@YQO(CZ$0E0IAKGRWI5WO6"]
}, {
	"word": "岁岁平安",
	"hex": ["J}M~91QGML~`@IXS$)I}S5R", "J}M~91QGML~`@IXS$)I}S5R", "N9ZX}8Q9}7{@2)FSK`4)YD6", "%K7OD)XHUEJWT$C{OG8K4[4"]
}, {
	"word": "滔滔不绝",
	"hex": ["H$KAZU9@$4)DZM$8$9TRYD0", "H$KAZU9@$4)DZM$8$9TRYD0", "P4P[MSA1(J2ZBDY29MI0(%O", "N{XPBXMII5{7%_RW5IAWS$D"]
}, {
	"word": "逃之夭夭",
	"hex": ["ZLOI%S]LAYZ}_R99V~[5$[L", "U[9LEL_ZD%4EEUK1K[W$HIR", "((S3Y1~~RK_%V9[(]`4T{L5", "((S3Y1~~RK_%V9[(]`4T{L5"]
}, {
	"word": "天方夜谭",
	"hex": ["[LVE`85IMDE4JWP1U4@LY77", "G6APQ@N6MWKJPDD`KMXL{WK", "D]L]DI8DC%1)7F24$O{}`PC", "PNXM$AIU7YB9E5J$SLV(K95"]
}, {
	"word": "天马行空",
	"hex": ["M%GA9$0[S0CYQ{ACM_QU]E1", "CFO08B9LWOBHYV_G}Y5ZUB3", "N~55(SH2R88N@PZ2P(XA$LS", "%PE{B8W}_YEGXHC_D_IK~(G"]
}, {
	"word": "天上人间",
	"hex": ["KU~V2S)[7AAGOAP~)FZZ7C3", "5`IG]4CLF7[EV~$04KJN2MT", "N~55(SH2R88N@PZ2P(XA$LS", "F68WXQMVZK6`S@[WFVJQ_KN"]
}, {
	"word": "天下无双",
	"hex": ["M%GA9$0[S0CYQ{ACM_QU]E1", "5C062Z@`4W[FS6PH~ACJ2M9", "P4P[MSA1(J2ZBDY29MI0(%O", "23PW0@T~S)U_V`LRNR8ZHIY"]
}, {
	"word": "头晕眼花",
	"hex": ["2K3N[[R2WZF}D8[A2SYE1~W", "WA~65N(6K9F7UL$BL{91})4", "H@ZU({0Q5VV](7D%KQ%(9}Q", "S}Q{_~S0S{NMC1VAKGKD9]3"]
}, {
	"word": "兔死狐悲",
	"hex": ["{MYM5{_SRSE[%08FW4D~}%D", "C}}[~6B3~6[2O[(Y0$ALOPW", "@(E_MLX3JTZKN)1M(OSN0@S", "DI@YVYF9P`FG@Y[IHW4IKUI"]
}, {
	"word": "望眼欲穿",
	"hex": ["FL2S@0NM0N5CCF2S{HS(%T3", "H@ZU({0Q5VV](7D%KQ%(9}Q", "LTS`JKM)JC]GUEQ]PLFR9@8", "{ZG@H(GBBX8RZ48E()LMNAO"]
}, {
	"word": "望洋兴叹",
	"hex": ["H@ZU({0Q5VV](7D%KQ%(9}Q", "E39{U37D$M(J0D{`}3(1DWJ", "QBHO~D%B_59OH5TDLN0$I5X", "R$B{[B1F}~ZFI`$UW(L8Q8K"]
}, {
	"word": "危机四伏",
	"hex": ["}G][OE]`UZNQ)7$[8Z6R_NL", "{_[QO$DW7DB_0YBWCYOYU_9", "C}}[~6B3~6[2O[(Y0$ALOPW", "_RTFARG(NUO_IULGEQZAU3C"]
}, {
	"word": "威风八面",
	"hex": ["C48I@FQ(WKB[{)2@2U~`_{0", "2X5_U{YMX}]NGLP{8O5@B3F", "YH1KC7R`~78G}Y_49@4S3~9", "PT@NJ)3`Y@KOF64N0CORX}O"]
}, {
	"word": "闻鸡起舞",
	"hex": ["NP`}]6~6ZXRJ8(`~$14JHFJ", "%WLIU6QE1T[XIU~H%{TW%%7", "B2MTRA423A)9P`[W%((3GM9", "3I7IF}4TKE@56{EYG%D63HF"]
}, {
	"word": "无法无天",
	"hex": ["[WLXVKQ2]XJ~JLCPV]Q))1R", "C}}[~6B3~6[2O[(Y0$ALOPW", "[WLXVKQ2]XJ~JLCPV]Q))1R", "[LVE`85IMDE4JWP1U4@LY77"]
}, {
	"word": "无孔不入",
	"hex": ["[WLXVKQ2]XJ~JLCPV]Q))1R", "%PE{B8W}_YEGXHC_D_IK~(G", "CA7_46}C7S9A$Z~I_49K_AM", "8FR6P@U)7JSO}53C4VF~6XD"]
}, {
	"word": "五风十雨",
	"hex": ["AMZ)2V[2HY5G_S[{Y}T(UJE", "2X5_U{YMX}]NGLP{8O5@B3F", "4I`MDUI8B2C]KU_[AI$HZ_Y", "8X{2XF@`KSE_`P2XB@ZADUY"]
}, {
	"word": "五光十色",
	"hex": ["HL%ZBR$RB)CV3KPG{D[J1N6", "~DA422Z_P[`TJ3Z$6HM2}$M", "D4H6J(90(WSZZ%TRSGKHP$A", "69}2F]68[%4O6U{2Y_1IC21"]
}, {
	"word": "五光十色",
	"hex": ["WEHWKB]G582CZXBLTP}L3]1", "~DA422Z_P[`TJ3Z$6HM2}$M", "4I`MDUI8B2C]KU_[AI$HZ_Y", "2AFK2EFJI{J]]KQPLBVBULM"]
}, {
	"word": "五花八门",
	"hex": ["AMZ)2V[2HY5G_S[{Y}T(UJE", "FZK9(CP}P_K5@GCZ${{PW]B", "4U9HLYEAVVAXM_P5_72])4D", "K2N9H9R82`C@3}ASMMA1_{K"]
}, {
	"word": "五零四散",
	"hex": ["[WLXVKQ2]XJ~JLCPV]Q))1R", "D}4]NX9L0UA91EMD$B{4KZO", "C}}[~6B3~6[2O[(Y0$ALOPW", "8X{2XF@`KSE_`P2XB@ZADUY"]
}, {
	"word": "五男二女",
	"hex": ["[WLXVKQ2]XJ~JLCPV]Q))1R", "K5QCTA@FP[22%0ZZZ[{`~`O", "[OC)VVH6G[RVDWKN~@94[U4", "Y$LZ%FBUMI8%%{NQ`[WW1(G"]
}, {
	"word": "喜怒哀乐",
	"hex": ["L)5W37U)B)%A3035JC{A_PT", "SS}BT@DYS1O}PTL_I~$~6L0", "X@DSHL)}4B_JVSR3I3FTNE0", "QBHO~D%B_59OH5TDLN0$I5X"]
}, {
	"word": "喜上眉梢",
	"hex": ["QBHO~D%B_59OH5TDLN0$I5X", "5`IG]4CLF7[EV~$04KJN2MT", "1A2L{B}FUPY008~[20I014A", "S~LW`Y7C8DV}Q91QC%Q`6HH"]
}, {
	"word": "相机而行",
	"hex": ["$T0GN`LMNBC9{5M}`3C8]GE", "{_[QO$DW7DB_0YBWCYOYU_9", "K5QCTA@FP[22%0ZZZ[{`~`O", "9N004]A}RAC%@[{BYTCLZXO"]
}, {
	"word": "相见恨晚",
	"hex": ["$T0GN`LMNBC9{5M}`3C8]GE", "H@ZU({0Q5VV](7D%KQ%(9}Q", "{_Z[~4]~(V2WRSZAOWZQ@ZU", "O72%G]PWNNFRCU4VII4US`1"]
}, {
	"word": "相亲相爱",
	"hex": [")87BIFAMB2[SCJDT6Q1478L", "[A(64V{OUT1B0GUXQ~YUC$8", ")87BIFAMB2[SCJDT6Q1478L", "AGP@OWCP02XQ(AB0T%C2%VQ"]
}, {
	"word": "香草美人",
	"hex": [")87BIFAMB2[SCJDT6Q1478L", "83W(PLONY1NJGV2ZO~RJ{HB", "3I7IF}4TKE@56{EYG%D63HF", "K5QCTA@FP[22%0ZZZ[{`~`O"]
}, {
	"word": "小鸟依人",
	"hex": ["}QQNUFQFC_}Q5M9)SBYO39H", "_WK@R[~_{97BBZW725)}0MB", "2F$CIZC%OLL%IC~3N)K}3YD", "BI]EBT7[F%0T%T$A3LZZWC3"]
}, {
	"word": "笑口常开",
	"hex": ["QBHO~D%B_59OH5TDLN0$I5X", "LLYXF9H612_TOKXXX}$`K@8", "[EX)AYH%VKFZVRVBG1{_A}1", "TP2H[}K$%03{2[LRA@2TL5H"]
}, {
	"word": "携手并肩",
	"hex": ["%EU33{[%JZW`6`9SW@O}$W7", "EFPTN`5L2WLUXWFC8QG~83T", "$}AHD)P_]LVO29KGB%WONAP", "N~C7NOY~03VN7XYAI6$QHML"]
}, {
	"word": "携手并肩",
	"hex": ["YHHGAFN9WG7EWU8B@OTLD{W", "WEHWKB]G582CZXBLTP}L3]1", "(~8AS`1L)`8$PLMSZGTRJ25", "N~C7NOY~03VN7XYAI6$QHML"]
}, {
	"word": "心比天高",
	"hex": ["3`Z3CZ~LS7N2UJZH)25@4LK", "P4AE{_FZJ`NL~MG$83[0YCN", "M%GA9$0[S0CYQ{ACM_QU]E1", "OHNQ$PJY6PRF)_H7)3}YK0N"]
}, {
	"word": "心口如一",
	"hex": ["%Z4%@]JSA0%O[(N[}HTN7MJ", "LLYXF9H612_TOKXXX}$`K@8", "8FR6P@U)7JSO}53C4VF~6XD", "ZPH0$A6OV{2KGN1KU39@S`1"]
}, {
	"word": "心猿意马",
	"hex": ["%Z4%@]JSA0%O[(N[}HTN7MJ", "%PE{B8W}_YEGXHC_D_IK~(G", "{DWVE`UPU5}UWI%M76NUFBK", "I8F[Y~8KB%J668[5JV6[)GI"]
}, {
	"word": "心照不宣",
	"hex": ["%Z4%@]JSA0%O[(N[}HTN7MJ", "KJ%FW]LK5JNO9MYSL5[@M`U", "9N004]A}RAC%@[{BYTCLZXO", "V54BR%R4{HNQ1MYECQRX3YQ"]
}, {
	"word": "心照不宣",
	"hex": ["3`Z3CZ~LS7N2UJZH)25@4LK", "]~)W$O0HTZ8)$DJ00O]3VAP", "P4P[MSA1(J2ZBDY29MI0(%O", "{S_A[Q8)IW7Y94X4M3%BD92"]
}, {
	"word": "星罗棋布",
	"hex": ["T0W1F%X~NBVCQ$RG52L0EE6", "DPX%]3EL4C%GG5B{~(Z)[@G", "7OXIBD8%}F8M5_@0`U2[_PB", "@(Y@GEET3TGF7JIM0FA813S"]
}, {
	"word": "星前月下",
	"hex": ["T_ZKW6KJ_X{%[%P_AY$`(]X", "5R5CSIFU0`)D~W@%_K4J76A", "2}JB2}6{KGC{CX9)~WQ{%Z7", "4W}[)MLG0FZP)}PCEI@1LK7"]
}, {
	"word": "惺惺相惜",
	"hex": ["T0W1F%X~NBVCQ$RG52L0EE6", "T0W1F%X~NBVCQ$RG52L0EE6", ")87BIFAMB2[SCJDT6Q1478L", "WS(EVLZ(ZL0LM[%FXEKY64P"]
}, {
	"word": "行尸走肉",
	"hex": ["N~55(SH2R88N@PZ2P(XA$LS", "~2TW7Q@6@M7CNA7JLN`LMTF", ")PZ`J]2JBM~S@(EQ}O$}MM6", "`TI~~LS{(7UGEDPA$F5$1F4"]
}, {
	"word": "行云流水",
	"hex": ["T_ZKW6KJ_X{%[%P_AY$`(]X", "[LVE`85IMDE4JWP1U4@LY77", "15{UML[W@U{DUUS(DBGWS}I", "WK{C~[E(`I%TY@ILZKWW_TD"]
}, {
	"word": "雄视一世",
	"hex": ["A507Y0F(73OQOTR{0O)NGZI", "I`Q{A5T7DK7QUG@~%L46]3T", "S8I1UYSA3E1_CZG9HMVW]QL", "I`Q{A5T7DK7QUG@~%L46]3T"]
}, {
	"word": "学富五车",
	"hex": ["9SD[~NZG6E3UZ6KB(_@TUIR", "5R5CSIFU0`)D~W@%_K4J76A", "WEHWKB]G582CZXBLTP}L3]1", "EUH[KFYN}V}9V77POVH{0(S"]
}, {
	"word": "雪上加霜",
	"hex": ["$G0]_Z33CI7DBW%A@BPFG5X", "5`IG]4CLF7[EV~$04KJN2MT", "4I`MDUI8B2C]KU_[AI$HZ_Y", "Y79AZ$NLICT2_ZK5NZLU[`T"]
}, {
	"word": "血雨腥风",
	"hex": ["$G0]_Z33CI7DBW%A@BPFG5X", "8X{2XF@`KSE_`P2XB@ZADUY", "T_ZKW6KJ_X{%[%P_AY$`(]X", "2X5_U{YMX}]NGLP{8O5@B3F"]
}, {
	"word": "鸦雀无声",
	"hex": ["[WL`DPL`9N01(BG5_HU`$YI", "_WK@R[~_{97BBZW725)}0MB", "P4P[MSA1(J2ZBDY29MI0(%O", "[EX)AYH%VKFZVRVBG1{_A}1"]
}, {
	"word": "掩耳盗铃",
	"hex": ["V}JS(1~DIWZ}`{DKNN7FVCX", "$8P3)ZLAZA{HX%[VDN8T%YA", "T[MP6N[TJ%O]OF(YHSDNCOV", "J{34WCZ65PYFJ`PC~M0BY`I"]
}, {
	"word": "掩人耳目",
	"hex": ["ALJ4@UAID6IC4VGE4B4)IHK", "K5QCTA@FP[22%0ZZZ[{`~`O", "$8P3)ZLAZA{HX%[VDN8T%YA", "H@ZU({0Q5VV](7D%KQ%(9}Q"]
}, {
	"word": "眼高手低",
	"hex": ["H@ZU({0Q5VV](7D%KQ%(9}Q", "5`IG]4CLF7[EV~$04KJN2MT", "WEHWKB]G582CZXBLTP}L3]1", "5C062Z@`4W[FS6PH~ACJ2M9"]
}, {
	"word": "洋洋得意",
	"hex": ["S4%9(NSX233_$DH44TTTBCI", "S4%9(NSX233_$DH44TTTBCI", "S1)M$FXSIM3K2ROB3LKY$$1", "2F$CIZC%OLL%IC~3N)K}3YD"]
}, {
	"word": "仰之弥高",
	"hex": ["S4%9(NSX233_$DH44TTTBCI", "U[9LEL_ZD%4EEUK1K[W$HIR", "_F$J3PD8@Z@6N7`CY1E%%_D", "OHNQ$PJY6PRF)_H7)3}YK0N"]
}, {
	"word": "养儿防老",
	"hex": ["E39{U37D$M(J0D{`}3(1DWJ", "K5QCTA@FP[22%0ZZZ[{`~`O", "F68WXQMVZK6`S@[WFVJQ_KN", "]OPQAGC__XOKN7OR9Y_AS7W"]
}, {
	"word": "养虎为患",
	"hex": ["E39{U37D$M(J0D{`}3(1DWJ", "Y7M$L13B{$D)$EI@}U4HALY", "}G][OE]`UZNQ)7$[8Z6R_NL", "JOG(9(_0ME7NQCMDU6KUUM7"]
}, {
	"word": "养家活口",
	"hex": ["E39{U37D$M(J0D{`}3(1DWJ", "_IO_RS]{~(%04NF]CUA5MU0", "S~LW`Y7C8DV}Q91QC%Q`6HH", "LLYXF9H612_TOKXXX}$`K@8"]
}, {
	"word": "养老送终",
	"hex": ["E39{U37D$M(J0D{`}3(1DWJ", "]OPQAGC__XOKN7OR9Y_AS7W", "G7P32E%(P61T)I@1OTHJ)BX", "@XY]@EKJCOGR0}JAG2CD50J"]
}, {
	"word": "妖魔鬼怪",
	"hex": ["L`C1NIPOKLT1VF}G[FXXR60", "A](3){YOPFTY@MF(7W6D394", "H`)[_ZAMAN0}0~AL[3$_LUJ", "G}2E9Q)_04U4S8@CVCP9)54"]
}, {
	"word": "业精于勤",
	"hex": ["(FNXNDEG{NP}{J`D$VJ7ZZ4", "MT`N}4LP%8C@LZS%F[}`UQH", "ZSHBSXA$AZWKA]D52K@E5[4", "PNXM$AIU7YB9E5J$SLV(K95"]
}, {
	"word": "业业兢兢",
	"hex": ["(FNXNDEG{NP}{J`D$VJ7ZZ4", "~8W08NY29@MGSF15J$H)%VE", "N[O{`WN5GLP4XJFBGQ@EVCV", "MT`N}4LP%8C@LZS%F[}`UQH"]
}, {
	"word": "叶公好龙",
	"hex": ["(FNXNDEG{NP}{J`D$VJ7ZZ4", "]OPQAGC__XOKN7OR9Y_AS7W", "FH}U1L6(Q%6(I~U~0S)05A6", "~}6SZVI`1U_EZLPFUHP7XMQ"]
}, {
	"word": "一板一眼",
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "_M[6M1R%]3RJ1@%SM4{`VUS", "ZPH0$A6OV{2KGN1KU39@S`1", "H@ZU({0Q5VV](7D%KQ%(9}Q"]
}, {
	"word": "一悲一喜",
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "O6ZF%W9MGN78_8{8_P9UBQ5", "ZPH0$A6OV{2KGN1KU39@S`1", "}QQNUFQFC_}Q5M9)SBYO39H"]
}, {
	"word": "一朝一夕",
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "{~P9ANL%EB4$8}B(1V0HT_4", "ZPH0$A6OV{2KGN1KU39@S`1", "2}JB2}6{KGC{CX9)~WQ{%Z7"]
}, {
	"word": "一槌定音",
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "0OK@COF(`VT)077NK`2~DO3", "MVH0DXNY~]FZOD2X)ZEAP0H", "NG67TZFE073LM[_2E]FSD0Z"]
}, {
	"word": "一飞冲天",
	"hex": ["{DWVE`UPU5}UWI%M76NUFBK", "KU~V2S)[7AAGOAP~)FZZ7C3", "O3WQ)C1S%G`35I`J59L`5VW", "[LVE`85IMDE4JWP1U4@LY77"]
}, {
	"word": "一见倾心",
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "H@ZU({0Q5VV](7D%KQ%(9}Q", "CE_6{RQP]3{T@BAJGTH{IW4", "3`Z3CZ~LS7N2UJZH)25@4LK"]
}, {
	"word": "一见钟情",
	"hex": ["]IHIRB3O8_TXW)R_VQA04ME", "U]AOJ}6BICTK[L(1@GX[$F4", "N3B7{O70B_]ZJR%N7~IQ)YN", "9KE3SIPIL{T0F~)03A%[(TA"]
}, {
	"word": "一举两得",
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "TP2H[}K$%03{2[LRA@2TL5H", "S$V[8IML7B`@]B39XWZ3VIF", "S1)M$FXSIM3K2ROB3LKY$$1"]
}, {
	"word": "一龙一蛇",
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "~}6SZVI`1U_EZLPFUHP7XMQ", "ZPH0$A6OV{2KGN1KU39@S`1", "~BC@S4$74D~{RV$3M5W~6(F"]
}, {
	"word": "一龙一猪",
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "~}6SZVI`1U_EZLPFUHP7XMQ", "ZPH0$A6OV{2KGN1KU39@S`1", "X`XX$4}QX3X5YG3G_T_G6ZS"]
}, {
	"word": "一拍即合",
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "}GX`Y]VC7NBW_XQ9%U@}TI9", "%WLIU6QE1T[XIU~H%{TW%%7", "%K7OD)XHUEJWT$C{OG8K4[4"]
}, {
	"word": "一日三月",
	"hex": ["{DWVE`UPU5}UWI%M76NUFBK", "{~P9ANL%EB4$8}B(1V0HT_4", "W$FA5[ZS2ER}_L]K_5RP5GA", "2}JB2}6{KGC{CX9)~WQ{%Z7"]
}, {
	"word": "一石二鸟",
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "D4H6J(90(WSZZ%TRSGKHP$A", "S$V[8IML7B`@]B39XWZ3VIF", "_WK@R[~_{97BBZW725)}0MB"]
}, {
	"word": "一事无成",
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "D4H6J(90(WSZZ%TRSGKHP$A", "AMZ)2V[2HY5G_S[{Y}T(UJE", "YY7V0_QB_T(D@[)%2[1T${6"]
}, {
	"word": "一手一足",
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "WEHWKB]G582CZXBLTP}L3]1", "ZPH0$A6OV{2KGN1KU39@S`1", "9N004]A}RAC%@[{BYTCLZXO"]
}, {
	"word": "一无所有",
	"hex": ["UJY0X2Q52PI[2ACUWRW%$(R", "[WLXVKQ2]XJ~JLCPV]Q))1R", "TS}WEZ23S7YS~R`~ENJZQ37", "Y0%$7`7{K)LX}5C3R1Q65I8"]
}, {
	"word": "一心一意",
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "%Z4%@]JSA0%O[(N[}HTN7MJ", "S8I1UYSA3E1_CZG9HMVW]QL", "ZPH0$A6OV{2KGN1KU39@S`1"]
}, {
	"word": "一针见血",
	"hex": ["{DWVE`UPU5}UWI%M76NUFBK", "R5N]H_QN65HE@E`VE0SM]NN", "U]AOJ}6BICTK[L(1@GX[$F4", "$G0]_Z33CI7DBW%A@BPFG5X"]
}, {
	"word": "一针一线",
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "MVH0DXNY~]FZOD2X)ZEAP0H", "ZPH0$A6OV{2KGN1KU39@S`1", "NIX%Y0BJ@VAJ2CK$~PL71{H"]
}, {
	"word": "衣食父母",
	"hex": ["W{{EP)36E7LF_%G(M6AP_ZV", "W``GSE)8(Z75KX3%~0IR@IP", "]OPQAGC__XOKN7OR9Y_AS7W", "(]II5ZE)9K8UV0P2}17Y7{5"]
}, {
	"word": "衣食住行",
	"hex": ["]IHIRB3O8_TXW)R_VQA04ME", "W``GSE)8(Z75KX3%~0IR@IP", "F68WXQMVZK6`S@[WFVJQ_KN", "BE)4S)]KD8JJ{0M%MDDQKHB"]
}, {
	"word": "依山傍水",
	"hex": ["]IHIRB3O8_TXW)R_VQA04ME", "]OVVCH2HZO]H3)@)~{WL[NS", "7[R844}%0OFGK]5`{V[WK)N", "6WN]0%L%U{896C0I%H)$@QM"]
}, {
	"word": "依依不舍",
	"hex": ["]IHIRB3O8_TXW)R_VQA04ME", "]IHIRB3O8_TXW)R_VQA04ME", "P4P[MSA1(J2ZBDY29MI0(%O", "_IO_RS]{~(%04NF]CUA5MU0"]
}, {
	"word": "以德报怨",
	"hex": ["]IHIRB3O8_TXW)R_VQA04ME", "S1)M$FXSIM3K2ROB3LKY$$1", "6)ZIJ%_BVVE{0BO}V4020RM", "KGM`}K($2K1DIXW}A$J`YL6"]
}, {
	"word": "以耳代目",
	"hex": ["S8I1UYSA3E1_CZG9HMVW]QL", "$8P3)ZLAZA{HX%[VDN8T%YA", "6)ZIJ%_BVVE{0BO}V4020RM", "H@ZU({0Q5VV](7D%KQ%(9}Q"]
}, {
	"word": "以古为鉴",
	"hex": ["UJY0X2Q52PI[2ACUWRW%$(R", "~2TW7Q@6@M7CNA7JLN`LMTF", "}G][OE]`UZNQ)7$[8Z6R_NL", "N~C7NOY~03VN7XYAI6$QHML"]
}, {
	"word": "以观后效",
	"hex": ["]IHIRB3O8_TXW)R_VQA04ME", "H@ZU({0Q5VV](7D%KQ%(9}Q", "H{DVOHBB@H_Y@%_~6SY@BLH", "QBHO~D%B_59OH5TDLN0$I5X"]
}, {
	"word": "以毛相马",
	"hex": ["]IHIRB3O8_TXW)R_VQA04ME", "AH4]U3`B(T$TW(}JVZOWTNA", ")87BIFAMB2[SCJDT6Q1478L", "I8F[Y~8KB%J668[5JV6[)GI"]
}, {
	"word": "以人为镜",
	"hex": ["]IHIRB3O8_TXW)R_VQA04ME", "BI]EBT7[F%0T%T$A3LZZWC3", "}G][OE]`UZNQ)7$[8Z6R_NL", "(E7SZT)[KP1E`K4)6IRS))J"]
}, {
	"word": "以牙还牙",
	"hex": ["]IHIRB3O8_TXW)R_VQA04ME", "LLYXF9H612_TOKXXX}$`K@8", "%PE{B8W}_YEGXHC_D_IK~(G", "LLYXF9H612_TOKXXX}$`K@8"]
}, {
	"word": "倚马可待",
	"hex": ["UJY0X2Q52PI[2ACUWRW%$(R", "I8F[Y~8KB%J668[5JV6[)GI", "JS{H3PKBG[6_NFME4%FUH29", "6)ZIJ%_BVVE{0BO}V4020RM"]
}, {
	"word": "异想天开",
	"hex": ["]IHIRB3O8_TXW)R_VQA04ME", ")87BIFAMB2[SCJDT6Q1478L", "[LVE`85IMDE4JWP1U4@LY77", "_M[6M1R%]3RJ1@%SM4{`VUS"]
}, {
	"word": "饮食男女",
	"hex": ["2%QUC6W)F0~4$@YI0D1_2UM", "FR3WXQG71W_P7HSC%Q3}9TL", "N~55(SH2R88N@PZ2P(XA$LS", "3I7IF}4TKE@56{EYG%D63HF"]
}, {
	"word": "有心无力",
	"hex": ["G7P32E%(P61T)I@1OTHJ)BX", "%Z4%@]JSA0%O[(N[}HTN7MJ", "P4P[MSA1(J2ZBDY29MI0(%O", ")ZFFI8_1[~00WG)JD[[MGUR"]
}, {
	"word": "余音绕梁",
	"hex": ["2ZGA8U%[IZJ6]5QQ7K38KUV", "QKDJBH_KO4YG4F[3{(ZUB[F", "NIX%Y0BJ@VAJ2CK$~PL71{H", "W``GSE)8(Z75KX3%~0IR@IP"]
}, {
	"word": "鱼目混珠",
	"hex": ["N[O{`WN5GLP4XJFBGQ@EVCV", "]$YF3_PJ~CE($48R0B3]B`4", "WA~65N(6K9F7UL$BL{91})4", "1$`748[M30P)YBX21P6L~3E"]
}, {
	"word": "与虎添翼",
	"hex": ["2ZGA8U%[IZJ6]5QQ7K38KUV", "Y7M$L13B{$D)$EI@}U4HALY", "M%GA9$0[S0CYQ{ACM_QU]E1", "S8I1UYSA3E1_CZG9HMVW]QL"]
}, {
	"word": "与物无竞",
	"hex": ["2ZGA8U%[IZJ6]5QQ7K38KUV", "[WLXVKQ2]XJ~JLCPV]Q))1R", "[WLXVKQ2]XJ~JLCPV]Q))1R", "N[O{`WN5GLP4XJFBGQ@EVCV"]
}, {
	"word": "语重心长",
	"hex": ["8X{2XF@`KSE_`P2XB@ZADUY", "@XY]@EKJCOGR0}JAG2CD50J", "%Z4%@]JSA0%O[(N[}HTN7MJ", "[EX)AYH%VKFZVRVBG1{_A}1"]
}, {
	"word": "欲哭无泪",
	"hex": ["%LA9$X7$}7{[DU[ACYYW9%V", "E88GZPUWFVDHABP)KB6_FYJ", "P4P[MSA1(J2ZBDY29MI0(%O", "WD$XN4L~WJZC)IAL[{`V5VN"]
}, {
	"word": "原原本本",
	"hex": ["KGM`}K($2K1DIXW}A$J`YL6", "KGM`}K($2K1DIXW}A$J`YL6", "67OG8)Z0%_W09_X{D(9S%HU", "67OG8)Z0%_W09_X{D(9S%HU"]
}, {
	"word": "月下老人",
	"hex": ["2}JB2}6{KGC{CX9)~WQ{%Z7", "5C062Z@`4W[FS6PH~ACJ2M9", "]OPQAGC__XOKN7OR9Y_AS7W", "BI]EBT7[F%0T%T$A3LZZWC3"]
}, {
	"word": "芸芸众生",
	"hex": ["[LVE`85IMDE4JWP1U4@LY77", "[LVE`85IMDE4JWP1U4@LY77", "@XY]@EKJCOGR0}JAG2CD50J", "CI]~O3RMBK$FMEM]ZP$SQQ7"]
}, {
	"word": "针锋相对",
	"hex": ["R5N]H_QN65HE@E`VE0SM]NN", "2X5_U{YMX}]NGLP{8O5@B3F", ")87BIFAMB2[SCJDT6Q1478L", "23PW0@T~S)U_V`LRNR8ZHIY"]
}, {
	"word": "震耳欲聋",
	"hex": ["R5N]H_QN65HE@E`VE0SM]NN", "$8P3)ZLAZA{HX%[VDN8T%YA", "2ZGA8U%[IZJ6]5QQ7K38KUV", "V}JS(1~DIWZ}`{DKNN7FVCX"]
}, {
	"word": "蒸蒸日上",
	"hex": ["NP`}]6~6ZXRJ8(`~$14JHFJ", "NP`}]6~6ZXRJ8(`~$14JHFJ", "{~P9ANL%EB4$8}B(1V0HT_4", "ZPH0$A6OV{2KGN1KU39@S`1"]
}, {
	"word": "纸上谈兵",
	"hex": ["%EU33{[%JZW`6`9SW@O}$W7", "ZPH0$A6OV{2KGN1KU39@S`1", "PNXM$AIU7YB9E5J$SLV(K95", "Y79AZ$NLICT2_ZK5NZLU[`T"]
}, {
	"word": "指腹为婚",
	"hex": ["Y{2~WZYDMLPEUR@1WJO2}FW", "9`2MO}ITWT5X2ZIKD3V(6GX", "}G][OE]`UZNQ)7$[8Z6R_NL", "5GYUH1D9WW)JQRS2F[_VB4L"]
}, {
	"word": "指手画脚",
	"hex": ["UN~W8Q(LVE@`~FC}J6GH5)W", "WEHWKB]G582CZXBLTP}L3]1", "F9}3}{RYT(0(VWVJIB5%MNQ", "9N004]A}RAC%@[{BYTCLZXO"]
}, {
	"word": "趾高气扬",
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "CI]~O3RMBK$FMEM]ZP$SQQ7", "1TJ~1QD5AX6UC2%QXPS(DVF", "E39{U37D$M(J0D{`}3(1DWJ"]
}, {
	"word": "冢中枯骨",
	"hex": ["N3B7{O70B_]ZJR%N7~IQ)YN", "@XY]@EKJCOGR0}JAG2CD50J", "E88GZPUWFVDHABP)KB6_FYJ", "~2TW7Q@6@M7CNA7JLN`LMTF"]
}, {
	"word": "猪朋狗友",
	"hex": ["X`XX$4}QX3X5YG3G_T_G6ZS", "23PW0@T~S)U_V`LRNR8ZHIY", ")O6WIX$`F195J{R@5JFL(I4", "23PW0@T~S)U_V`LRNR8ZHIY"]
}, {
	"word": "蛛丝马迹",
	"hex": ["X`XX$4}QX3X5YG3G_T_G6ZS", "C}}[~6B3~6[2O[(Y0$ALOPW", "CFO08B9LWOBHYV_G}Y5ZUB3", "9N004]A}RAC%@[{BYTCLZXO"]
}, {
	"word": "竹马之交",
	"hex": ["X`XX$4}QX3X5YG3G_T_G6ZS", "I8F[Y~8KB%J668[5JV6[)GI", "7O~23UIC5ULYTVY_W@W}}8R", "9N004]A}RAC%@[{BYTCLZXO"]
}, {
	"word": "走马观花",
	"hex": ["N~55(SH2R88N@PZ2P(XA$LS", "I8F[Y~8KB%J668[5JV6[)GI", "%BZRGZ7]M1VJY6](3CUH_C8", "R@SGMDL7Z3M$U7454`4PV`8"]
}, {
	"word": "走马观花",
	"hex": ["N~55(SH2R88N@PZ2P(XA$LS", "I8F[Y~8KB%J668[5JV6[)GI", "H@ZU({0Q5VV](7D%KQ%(9}Q", "FZK9(CP}P_K5@GCZ${{PW]B"]
}, {
	"word": "走马上任",
	"hex": ["N~55(SH2R88N@PZ2P(XA$LS", "I8F[Y~8KB%J668[5JV6[)GI", "5`IG]4CLF7[EV~$04KJN2MT", "K5QCTA@FP[22%0ZZZ[{`~`O"]
}, {
	"word": "足食足兵",
	"hex": ["9N004]A}RAC%@[{BYTCLZXO", "W``GSE)8(Z75KX3%~0IR@IP", "9N004]A}RAC%@[{BYTCLZXO", "(~8AS`1L)`8$PLMSZGTRJ25"]
}];