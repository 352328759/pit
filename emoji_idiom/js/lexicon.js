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
	"hex": ["3`Z3CZ~LS7N2UJZH)25@4LK", "F68WXQMVZK6`S@[WFVJQ_KN", "%WLIU6QE1T[XIU~H%{TW%%7", "F68WXQMVZK6`S@[WFVJQ_KN"],
	"word": "爱屋及乌"
}, {
	"hex": ["KGM`}K($2K1DIXW}A$J`YL6", "CFO08B9LWOBHYV_G}Y5ZUB3", "KU~V2S)[7AAGOAP~)FZZ7C3", "CFO08B9LWOBHYV_G}Y5ZUB3"],
	"word": "白马非马"
}, {
	"hex": ["DNQ{1@XDXF07LK_ISYFMD9Y", "}TE)237S}Z~V(0$$BQNJWYI", "A507Y0F(73OQOTR{0O)NGZI", "(~8AS`1L)`8$PLMSZGTRJ25"],
	"word": "百万雄兵"
}, {
	"hex": ["C~MG1FH}@_D8ZODVZCTPPP3", "N[O{`WN5GLP4XJFBGQ@EVCV", "2X5_U{YMX}]NGLP{8O5@B3F", "BN[B_P7_%N}%XH_Q%I3}[KS"],
	"word": "饱经风霜"
}, {
	"hex": ["C~MG1FH}@_D8ZODVZCTPPP3", "I`Q{A5T7DK7QUG@~%L46]3T", "@XY]@EKJCOGR0}JAG2CD50J", "{~P9ANL%EB4$8}B(1V0HT_4"],
	"word": "饱食终日"
}, {
	"hex": ["O6ZF%W9MGN78_8{8_P9UBQ5", "6WN]0%L%U{896C0I%H)$@QM", "0JL)TDER1RT9%}4@NKJB4DX", "JN]Y(9@65~HPARNA2C)8$I4"],
	"word": "杯水车薪"
}, {
	"hex": ["YUD]ZI6K~BA~96ZZMTH3N_5", "6WN]0%L%U{896C0I%H)$@QM", "EUH[KFYN}V}9V77POVH{0(S", "D0)Q$W1@ZP$7W@NTBPT8B}J"],
	"word": "杯水车薪"
}, {
	"hex": ["E88GZPUWFVDHABP)KB6_FYJ", "8OEVOVTI$OO0CVL(]4M6EX8", "CA7_46}C7S9A$Z~I_49K_AM", "_IO_RS]{~(%04NF]CUA5MU0"],
	"word": "悲喜交加"
}, {
	"hex": ["TOK`NV1GAG(K%Y7B7AD$B2M", "5C062Z@`4W[FS6PH~ACJ2M9", "CI]~O3RMBK$FMEM]ZP$SQQ7", "S}Q{_~S0S{NMC1VAKGKD9]3"],
	"word": "笔下生花"
}, {
	"hex": ["(~8AS`1L)`8$PLMSZGTRJ25", "%Z4%@]JSA0%O[(N[}HTN7MJ", "ZPH0$A6OV{2KGN1KU39@S`1", "7$~M3``Z~$%(FMGHBM%O1{5"],
	"word": "冰心一片"
}, {
	"hex": ["9P}9G$}PMF6}4SC0D@MOUEY", "{DWVE`UPU5}UWI%M76NUFBK", "]09R)N86]~AG4~9@X01)FMV", "P{8L7H%`L73GHM%9KYRWT`J"],
	"word": "兵不厌诈"
}, {
	"hex": ["(~8AS`1L)`8$PLMSZGTRJ25", "N~55(SH2R88N@PZ2P(XA$LS", "H`)[_ZAMAN0}0~AL[3$_LUJ", "VG$6@OTYR@QD4(6D%%7O]EL"],
	"word": "兵行诡道"
}, {
	"hex": ["DPX%]3EL4C%GG5B{~(Z)[@G", "[LVE`85IMDE4JWP1U4@LY77", "U]AOJ}6BICTK[L(1@GX[$F4", "IQ9@C~H76NQW{DB~_I)K)BV"],
	"word": "拨云见日"
}, {
	"hex": ["DPX%]3EL4C%GG5B{~(Z)[@G", "$8P3)ZLAZA{HX%[VDN8T%YA", "P4P[MSA1(J2ZBDY29MI0(%O", "N[O{`WN5GLP4XJFBGQ@EVCV"],
	"word": "博而不精"
}, {
	"hex": ["DPX%]3EL4C%GG5B{~(Z)[@G", "H@ZU({0Q5VV](7D%KQ%(9}Q", "AMZ)2V[2HY5G_S[{Y}T(UJE", "EUH[KFYN}V}9V77POVH{0(S"],
	"word": "博目五车"
}, {
	"hex": ["Y~YS3_QCBLR9OCYKPO@V_48", "H@ZU({0Q5VV](7D%KQ%(9}Q", "{~P9ANL%EB4$8}B(1V0HT_4", "8L0OHAR(_[A2U72IIONV6RK"],
	"word": "不识泰山"
}, {
	"hex": ["P4P[MSA1(J2ZBDY29MI0(%O", "]IHIRB3O8_TXW)R_VQA04ME", "CA7_46}C7S9A$Z~I_49K_AM", "N3B7{O70B_]ZJR%N7~IQ)YN"],
	"word": "不依不饶"
}, {
	"hex": ["9N004]A}RAC%@[{BYTCLZXO", "9N004]A}RAC%@[{BYTCLZXO", "CE_6{RQP]3{T@BAJGTH{IW4", "%Z4%@]JSA0%O[(N[}HTN7MJ"],
	"word": "步步惊心"
}, {
	"word": "草草收兵",
	"hex": ["R~9%39S[D~P~(SN5WXS$K)1", "R~9%39S[D~P~(SN5WXS$K)1", "WEHWKB]G582CZXBLTP}L3]1", "(~8AS`1L)`8$PLMSZGTRJ25"]
}, {
	"hex": ["4}`$0~M8@S9VIB9{WQCC6A2", "ZCMNP)I@H0]I2~NUZRM@9QR", "BI]EBT7[F%0T%T$A3LZZWC3", "Y79AZ$NLICT2_ZK5NZLU[`T"],
	"word": "草木皆兵"
}, {
	"hex": ["YUD]ZI6K~BA~96ZZMTH3N_5", "W``GSE)8(Z75KX3%~0IR@IP", "CA7_46}C7S9A$Z~I_49K_AM", "`J2X`%{$}8J)4HP_$({YCJH"],
	"word": "茶饭不思"
}, {
	"hex": ["YUD]ZI6K~BA~96ZZMTH3N_5", "H@ZU({0Q5VV](7D%KQ%(9}Q", "~E@]3OJ9)($G[5H){YS)1FI", "69}2F]68[%4O6U{2Y_1IC21"],
	"word": "察言观色"
}, {
	"hex": ["IQ9@C~H76NQW{DB~_I)K)BV", "~TPINOW{}WLMRD_IMJUNQZW", "2}JB2}6{KGC{CX9)~WQ{%Z7", "5C2NMMQTKNNPKO1RVMPMJBD"],
	"word": "朝三暮四"
}, {
	"hex": ["DPOM[NXU(8]B2`KGW{R%7$5", "WK{C~[E(`I%TY@ILZKWW_TD", "I8F[Y~8KB%J668[5JV6[)GI", "~}6SZVI`1U_EZLPFUHP7XMQ"],
	"word": "车水马龙"
}, {
	"hex": ["O3WQ)C1S%G`35I`J59L`5VW", "2X5_U{YMX}]NGLP{8O5@B3F", "~E@]3OJ9)($G[5H){YS)1FI", "8X{2XF@`KSE_`P2XB@ZADUY"],
	"word": "冲风冒雨"
}, {
	"hex": ["O6ZF%W9MGN78_8{8_P9UBQ5", "1A2L{B}FUPY008~[20I014A", "__)KY`R7~N~6GK3D3`H7ZQJ", "BI]EBT7[F%0T%T$A3LZZWC3"],
	"word": "愁眉苦脸"
}, {
	"hex": ["LLYXF9H612_TOKXXX}$`K@8", "}QQNUFQFC_}Q5M9)SBYO39H", ")87BIFAMB2[SCJDT6Q1478L", "ZPH0$A6OV{2KGN1KU39@S`1"],
	"word": "唇齿相依"
}, {
	"hex": ["C~MG1FH}@_D8ZODVZCTPPP3", "6)ZIJ%_BVVE{0BO}V4020RM", "$T0GN`LMNBC9{5M}`3C8]GE", "YY7V0_QB_T(D@[)%2[1T${6"],
	"word": "代代相承"
}, {
	"hex": ["VG$6@OTYR@QD4(6D%%7O]EL", "M9DFTC(G$95VZX2CJGD23~J", "N~C7NOY~03VN7XYAI6$QHML", "T3P8VUT93IIW47AH8YH@]F7"],
	"word": "刀光剑影"
}, {
	"hex": ["VG$6@OTYR@QD4(6D%%7O]EL", "H]~FNNG1(Q]JXN8D13DMS)U", "Y79AZ$NLICT2_ZK5NZLU[`T", "$4$DNLSD2MECLZIBH4`CP0H"],
	"word": "刀光血影"
}, {
	"hex": ["VG$6@OTYR@QD4(6D%%7O]EL", "}KP0O6L)3G)5Q@PS(R)X~4M", "S~LW`Y7C8DV}Q91QC%Q`6HH", "H$KAZU9@$4)DZM$8$9TRYD0"],
	"word": "刀山火海"
}, {
	"hex": ["2U@_KC)UXA9]QUQ)N30A%UG", "]WW)1ZK$187C_JU99%1H6_D", "VG$6@OTYR@QD4(6D%%7O]EL", "K5QCTA@FP[22%0ZZZ[{`~`O"],
	"word": "恶语伤人"
}, {
	"hex": ["K5QCTA@FP[22%0ZZZ[{`~`O", ")0ZC)@GM`E[XFPT]G9}FOCC", "2H5Z3JF[9{P0}I[6M99%%@E", "_IO_RS]{~(%04NF]CUA5MU0"],
	"word": "儿女亲家"
}, {
	"hex": ["5EM@RIN{GOE(SEM{~RI93EB", "5`IG]4CLF7[EV~$04KJN2MT", "ZPH0$A6OV{2KGN1KU39@S`1", "~E@]3OJ9)($G[5H){YS)1FI"],
	"word": "发上指冠"
}, {
	"hex": ["F68WXQMVZK6`S@[WFVJQ_KN", "CA7_46}C7S9A$Z~I_49K_AM", "5`IG]4CLF7[EV~$04KJN2MT", "F68WXQMVZK6`S@[WFVJQ_KN"],
	"word": "防不胜防"
}, {
	"hex": ["7$~M3``Z~$%(FMGHBM%O1{5", "Y7M$L13B{$D)$EI@}U4HALY", "OMINO(K}(B(R0B($2$YWMV3", "]OVVCH2HZO]H3)@)~{WL[NS"],
	"word": "放虎归山"
}, {
	"hex": ["KU~V2S)[7AAGOAP~)FZZ7C3", "]1$V5DDXRZ6QSQHTC5J}5`Q", "ZPH0$A6OV{2KGN1KU39@S`1", "[LVE`85IMDE4JWP1U4@LY77"],
	"word": "飞龙在天"
}, {
	"hex": ["KU~V2S)[7AAGOAP~)FZZ7C3", "_](PF0PC@R8D_ZM{5PN]RP7", "N~55(SH2R88N@PZ2P(XA$LS", "Y7M$L13B{$D)$EI@}U4HALY"],
	"word": "飞禽走兽"
}, {
	"hex": ["2X5_U{YMX}]NGLP{8O5@B3F", "F@4RR9(HGB94~@9B{06LW~G", "IQ9@C~H76NQW{DB~_I)K)BV", "7[R844}%0OFGK]5`{V[WK)N"],
	"word": "风和日丽"
}, {
	"hex": ["_F$J3PD8@Z@6N7`CY1E%%_D", "MCQDK}IQDSMBW}}M4JQ~]A9", "Y79AZ$NLICT2_ZK5NZLU[`T", "D]L]DI8DC%1)7F24$O{}`PC"],
	"word": "风花雪月"
}, {
	"hex": ["2X5_U{YMX}]NGLP{8O5@B3F", "FZK9(CP}P_K5@GCZ${{PW]B", "N{XPBXMII5{7%_RW5IAWS$D", "6)ZIJ%_BVVE{0BO}V4020RM"],
	"word": "风华绝代"
}, {
	"hex": ["2X5_U{YMX}]NGLP{8O5@B3F", "15{UML[W@U{DUUS(DBGWS}I", "9`2MO}ITWT5X2ZIKD3V(6GX", "_IO_RS]{~(%04NF]CUA5MU0"],
	"word": "风流人物"
}, {
	"word": "风行电击",
	"hex": ["2X5_U{YMX}]NGLP{8O5@B3F", "N~55(SH2R88N@PZ2P(XA$LS", "M9DFTC(G$95VZX2CJGD23~J", "%WLIU6QE1T[XIU~H%{TW%%7"]
}, {
	"hex": ["2X5_U{YMX}]NGLP{8O5@B3F", "3I7IF}4TKE@56{EYG%D63HF", "~}6SZVI`1U_EZLPFUHP7XMQ", "KU~V2S)[7AAGOAP~)FZZ7C3"],
	"word": "凤舞龙飞"
}, {
	"hex": ["CI]~O3RMBK$FMEM]ZP$SQQ7", "K5QCTA@FP[22%0ZZZ[{`~`O", "2F$CIZC%OLL%IC~3N)K}3YD", "KJ%FW]LK5JNO9MYSL5[@M`U"],
	"word": "高人一等"
}, {
	"hex": ["CI]~O3RMBK$FMEM]ZP$SQQ7", "]OVVCH2HZO]H3)@)~{WL[NS", "E39{U37D$M(J0D{`}3(1DWJ", "DI@YVYF9P`FG@Y[IHW4IKUI"],
	"word": "高山仰止"
}, {
	"hex": ["WS(EVLZ(ZL0LM[%FXEKY64P", "H@ZU({0Q5VV](7D%KQ%(9}Q", ")87BIFAMB2[SCJDT6Q1478L", "H@ZU({0Q5VV](7D%KQ%(9}Q"],
	"word": "刮目相看"
}, {
	"hex": ["OMINO(K}(B(R0B($2$YWMV3", "3`Z3CZ~LS7N2UJZH)25@4LK", "YYKPK%]F4{I[VF$Y](DTHKH", "U]AOJ}6BICTK[L(1@GX[$F4"],
	"word": "归心似箭"
}, {
	"hex": ["H`)[_ZAMAN0}0~AL[3$_LUJ", "_RTFARG(NUO_IULGEQZAU3C", "%U~)P7%{DX]22C379~6)YQM", "O)U47U5QA$@J%SDTR50XXFL"],
	"word": "鬼斧神工"
}, {
	"hex": ["N9ZX}8Q9}7{@2)FSK`4)YD6", "I`Q{A5T7DK7QUG@~%L46]3T", "}H%{L_DRT[OE8]GI}6_4K2N", "MCQDK}IQDSMBW}}M4JQ~]A9"],
	"word": "过时黄花"
}, {
	"hex": ["N9ZX}8Q9}7{@2)FSK`4)YD6", "H@ZU({0Q5VV](7D%KQ%(9}Q", "[LVE`85IMDE4JWP1U4@LY77", "ALJ4@UAID6IC4VGE4B4)IHK"],
	"word": "过眼云烟"
}, {
	"hex": ["%Z4%@]JSA0%O[(N[}HTN7MJ", "9`2MO}ITWT5X2ZIKD3V(6GX", "TZT[YE~(`_8]DR24()2DPK4", "Y$LZ%FBUMI8%%{NQ`[WW1(G"],
	"word": "红男绿女"
}, {
	"hex": ["H{DVOHBB@H_Y@%_~6SY@BLH", "K2N9H9R82`C@3}ASMMA1_{K", "C}}[~6B3~6[2O[(Y0$ALOPW", "H$KAZU9@$4)DZM$8$9TRYD0"],
	"word": "侯门似海"
}, {
	"hex": ["H{DVOHBB@H_Y@%_~6SY@BLH", "4B]GVXI$~A2%2IFQG50F7CE", "CFO08B9LWOBHYV_G}Y5ZUB3", "6NFJ93EKT%5XR939}`28O1C"],
	"word": "猴年马月"
}, {
	"hex": ["@(E_MLX3JTZKN)1M(OSN0@S", "08}R}[E1Z%ORTX~7622%{@9", "AH4]U3`B(T$TW(}JVZOWTNA", "VBU%_J2QL2FGS5WYNIS%7UA"],
	"word": "狐假虎威"
}, {
	"hex": ["Y7M$L13B{$D)$EI@}U4HALY", "H@ZU({0Q5VV](7D%KQ%(9}Q", "T5Y%}K]$1N)}MAF3ZI1C1SD", "T5Y%}K]$1N)}MAF3ZI1C1SD"],
	"word": "虎视眈眈"
}, {
	"hex": ["FZK9(CP}P_K5@GCZ${{PW]B", "MCQDK}IQDSMBW}}M4JQ~]A9", "]OPQAGC__XOKN7OR9Y_AS7W", "K5QCTA@FP[22%0ZZZ[{`~`O"],
	"word": "花花公子"
}, {
	"hex": ["FZK9(CP}P_K5@GCZ${{PW]B", "[WLXVKQ2]XJ~JLCPV]Q))1R", "]OVVCH2HZO]H3)@)~{WL[NS", "OBUYB]DH{3G3K21[[6~X{S8"],
	"word": "华屋山丘"
}, {
	"hex": ["S}Q{_~S0S{NMC1VAKGKD9]3", "T0W1F%X~NBVCQ$RG52L0EE6", "AZ1HXL[XP46~5Z2{6LTJ}IV", "D]L]DI8DC%1)7F24$O{}`PC"],
	"word": "华星秋月"
}, {
	"hex": ["F9}3}{RYT(0(VWVJIB5%MNQ", "]1$V5DDXRZ6QSQHTC5J}5`Q", ")2R(3%H@{_3_DSMBQ0XM)(P", "H@ZU({0Q5VV](7D%KQ%(9}Q"],
	"word": "画龙点睛"
}, {
	"hex": ["P4AE{_FZJ`NL~MG$83[0YCN", "~BC@S4$74D~{RV$3M5W~6(F", "[LVE`85IMDE4JWP1U4@LY77", "M~GU)Y4A%MWQHU%O))DC5(M"],
	"word": "画蛇添足"
}, {
	"hex": ["H`)[_ZAMAN0}0~AL[3$_LUJ", "P4P[MSA1(J2ZBDY29MI0(%O", "WEHWKB]G582CZXBLTP}L3]1", "~BC@S4$74D~{RV$3M5W~6(F"],
	"word": "魂不守舍"
}, {
	"hex": ["S~LW`Y7C8DV}Q91QC%Q`6HH", "NP`}]6~6ZXRJ8(`~$14JHFJ", "S~LW`Y7C8DV}Q91QC%Q`6HH", "NP`}]6~6ZXRJ8(`~$14JHFJ"],
	"word": "火烧火燎"
}, {
	"hex": ["S~LW`Y7C8DV}Q91QC%Q`6HH", "K%WUOBH4IWV@N5)]5IQC~DF", "QKDJBH_KO4YG4F[3{(ZUB[F", "FZK9(CP}P_K5@GCZ${{PW]B"],
	"word": "火树银花"
}, {
	"hex": ["%WLIU6QE1T[XIU~H%{TW%%7", "CA7_46}C7S9A$Z~I_49K_AM", "JS{H3PKBG[6_NFME4%FUH29", "D4H6J(90(WSZZ%TRSGKHP$A"],
	"word": "机不可失"
}, {
	"hex": ["55@K8DLC{G57OZ8D27BMXYD", "KU~V2S)[7AAGOAP~)FZZ7C3", ")O6WIX$`F195J{R@5JFL(I4", ")PZ`J]2JBM~S@(EQ}O$}MM6"],
	"word": "鸡飞狗跳"
}, {
	"hex": ["%WLIU6QE1T[XIU~H%{TW%%7", "LLYXF9H612_TOKXXX}$`K@8", "SR68QL(U%TT_%VM[@)@~Q)I", "H{DVOHBB@H_Y@%_~6SY@BLH"],
	"word": "鸡口牛后"
}, {
	"hex": ["{_[QO$DW7DB_0YBWCYOYU_9", "P9B}%QRP5ZB1TJ7UZDYHE`U", "CI]~O3RMBK$FMEM]ZP$SQQ7", "O72%G]PWNNFRCU4VII4US`1"],
	"word": "鸡犬升天"
}, {
	"hex": ["%WLIU6QE1T[XIU~H%{TW%%7", "0{A{QL0XERF15K(BI3HF6@T", "55@K8DLC{G57OZ8D27BMXYD", "V54BR%R4{HNQ1MYECQRX3YQ"],
	"word": "鸡同鸭讲"
}, {
	"hex": ["_IO_RS]{~(%04NF]CUA5MU0", "_IO_RS]{~(%04NF]CUA5MU0", "F68WXQMVZK6`S@[WFVJQ_KN", "F68WXQMVZK6`S@[WFVJQ_KN"],
	"word": "家家户户"
}, {
	"hex": ["9N004]A}RAC%@[{BYTCLZXO", "{MYM5{_SRSE[%08FW4D~}%D", "W$FA5[ZS2ER}_L]K_5RP5GA", "E88GZPUWFVDHABP)KB6_FYJ"],
	"word": "狡兔三窟"
}, {
	"hex": ["(E7SZT)[KP1E`K4)6IRS))J", "S}Q{_~S0S{NMC1VAKGKD9]3", "WK{C~[E(`I%TY@ILZKWW_TD", "2}JB2}6{KGC{CX9)~WQ{%Z7"],
	"word": "镜花水月"
}, {
	"hex": ["4I86L{PT)W]SS5XEJP{ZE)Y", "2%QUC6W)F0~4$@YI0D1_2UM", "OMINO(K}(B(R0B($2$YWMV3", "ZPH0$A6OV{2KGN1KU39@S`1"],
	"word": "九九归一"
}, {
	"hex": ["HV{VBFX_MX]JNO8YP1957NW", "G@][K9HS$MCNI4I_Z8GUQ}J", "OMINO(K}(B(R0B($2$YWMV3", "W{{EP)36E7LF_%G(M6AP_ZV"],
	"word": "九九归一"
}, {
	"hex": ["~FBGH]Z7JZTN4(F)FMY_E3K", "L0D3GS0D~({~U9_GAH{8CLS", "W$FA5[ZS2ER}_L]K_5RP5GA", "9N004]A}RAC%@[{BYTCLZXO"],
	"word": "九流三教"
}, {
	"hex": ["HV{VBFX_MX]JNO8YP1957NW", "SR68QL(U%TT_%VM[@)@~Q)I", "[OC)VVH6G[RVDWKN~@94[U4", "HJ[KUDU4}DMJXB{FYL4`XJR"],
	"word": "九牛二虎"
}, {
	"hex": ["HV{VBFX_MX]JNO8YP1957NW", "M3ZK[)X98@STN2$LHCXF()K", "ZPH0$A6OV{2KGN1KU39@S`1", "FH%LFXKZAEE3INWUH%8{(5N"],
	"word": "九牛一毛"
}, {
	"hex": ["~FBGH]Z7JZTN4(F)FMY_E3K", "C}}[~6B3~6[2O[(Y0$ALOPW", "2F$CIZC%OLL%IC~3N)K}3YD", "W$FA5[ZS2ER}_L]K_5RP5GA"],
	"word": "九死一生"
}, {
	"hex": ["H5QU[_H(1B{[USU{A8Y(YBR", "`K$AAJO3SY4I)WYTE9OJL)R", "EYVX1X)P~31U$)~[_GU9SEQ", "]OVVCH2HZO]H3)@)~{WL[NS"],
	"word": "开门见山"
}, {
	"hex": ["JS{H3PKBG[6_NFME4%FUH29", "[EX)AYH%VKFZVRVBG1{_A}1", "JS{H3PKBG[6_NFME4%FUH29", "E88GZPUWFVDHABP)KB6_FYJ"],
	"word": "可歌可泣"
}, {
	"hex": ["VG$6@OTYR@QD4(6D%%7O]EL", "2N{DEO%YOZB6Z8G`X_Q0[OI", "OBUYB]DH{3G3K21[[6~X{S8", "U]AOJ}6BICTK[L(1@GX[$F4"],
	"word": "刻舟求剑"
}, {
	"hex": ["%PE{B8W}_YEGXHC_D_IK~(G", "AMZ)2V[2HY5G_S[{Y}T(UJE", "G7P32E%(P61T)I@1OTHJ)BX", "61$BXZ_VQ@9G}QEE$@(RQ[F"],
	"word": "孔武有力"
}, {
	"hex": ["LLYXF9H612_TOKXXX}$`K@8", "_F$J3PD8@Z@6N7`CY1E%%_D", "5R5CSIFU0`)D~W@%_K4J76A", "U]AOJ}6BICTK[L(1@GX[$F4"],
	"word": "口蜜腹剑"
}, {
	"hex": ["08[SR[4K9`VV~OC]~L[AQT5", "D4H6J(90(WSZZ%TRSGKHP$A", "%Z4%@]JSA0%O[(N[}HTN7MJ", "CA7_46}C7S9A$Z~I_49K_AM"],
	"word": "口是心非"
}, {
	"word": "枯树生华",
	"hex": ["E88GZPUWFVDHABP)KB6_FYJ", "ZCMNP)I@H0]I2~NUZRM@9QR", "CI]~O3RMBK$FMEM]ZP$SQQ7", "FZK9(CP}P_K5@GCZ${{PW]B"]
}, {
	"hex": ["__)KY`R7~N~6GK3D3`H7ZQJ", "08[SR[4K9`VV~OC]~L[AQT5", "(]II5ZE)9K8UV0P2}17Y7{5", "3`Z3CZ~LS7N2UJZH)25@4LK"],
	"word": "苦口婆心"
}, {
	"hex": ["QBHO~D%B_59OH5TDLN0$I5X", "CA7_46}C7S9A$Z~I_49K_AM", "C}}[~6B3~6[2O[(Y0$ALOPW", "ZCMNP)I@H0]I2~NUZRM@9QR"],
	"word": "乐不思蜀"
}, {
	"hex": ["P{8L7H%`L73GHM%9KYRWT`J", "BSE]Y{KOQ8$I1K41{(WB9Q2", "R5N]H_QN65HE@E`VE0SM]NN", "$8P3)ZLAZA{HX%[VDN8T%YA"],
	"word": "雷声震耳"
}, {
	"hex": ["WK{C~[E(`I%TY@ILZKWW_TD", "SR68QL(U%TT_%VM[@)@~Q)I", "2%QUC6W)F0~4$@YI0D1_2UM", "PT@NJ)3`Y@KOF64N0CORX}O"],
	"word": "泪流满面"
}, {
	"hex": [")ZFFI8_1[~00WG)JD[[MGUR", "1A2L{B}FUPY008~[20I014A", "5R5CSIFU0`)D~W@%_K4J76A", "7RQ9HSMQVR2E88P8GQ6D7[0"],
	"word": "梨花带雨"
}, {
	"hex": [")ZFFI8_1[~00WG)JD[[MGUR", "CA7_46}C7S9A$Z~I_49K_AM", "I67`OP146{PNF9U5ZHLP6ZK", "%Z4%@]JSA0%O[(N[}HTN7MJ"],
	"word": "力不从心"
}, {
	"hex": ["J{34WCZ65PYFJ`PC~M0BY`I", "@(E_MLX3JTZKN)1M(OSN0@S", "HM{1WCZO0{SZ7YQGWGV9H~I", "H@ZU({0Q5VV](7D%KQ%(9}Q"],
	"word": "琳琅满目"
}, {
	"hex": ["J{34WCZ65PYFJ`PC~M0BY`I", "J{34WCZ65PYFJ`PC~M0BY`I", "T0W1F%X~NBVCQ$RG52L0EE6", "T0W1F%X~NBVCQ$RG52L0EE6"],
	"word": "零零星星"
}, {
	"hex": ["J{34WCZ65PYFJ`PC~M0BY`I", "K5QCTA@FP[22%0ZZZ[{`~`O", "X`XX$4}QX3X5YG3G_T_G6ZS", "H@ZU({0Q5VV](7D%KQ%(9}Q"],
	"word": "令人注目"
}, {
	"hex": ["15{UML[W@U{DUUS(DBGWS}I", "2H5Z3JF[9{P0}I[6M99%%@E", "CA7_46}C7S9A$Z~I_49K_AM", "9`2MO}ITWT5X2ZIKD3V(6GX"],
	"word": "六亲不认"
}, {
	"hex": ["~}6SZVI`1U_EZLPFUHP7XMQ", "KU~V2S)[7AAGOAP~)FZZ7C3", "55@K8DLC{G57OZ8D27BMXYD", "3I7IF}4TKE@56{EYG%D63HF"],
	"word": "龙飞凤舞"
}, {
	"hex": ["]1$V5DDXRZ6QSQHTC5J}5`Q", "Y7M$L13B{$D)$EI@}U4HALY", "2X5_U{YMX}]NGLP{8O5@B3F", "[LVE`85IMDE4JWP1U4@LY77"],
	"word": "龙虎风云"
}, {
	"hex": ["]1$V5DDXRZ6QSQHTC5J}5`Q", ")_5VT22`8V5U9IQZ77(~_LP", "HJ[KUDU4}DMJXB{FYL4`XJR", "YY7V0_QB_T(D@[)%2[1T${6"],
	"word": "龙盘虎踞"
}, {
	"hex": ["CFO08B9LWOBHYV_G}Y5ZUB3", "5C062Z@`4W[FS6PH~ACJ2M9", "YY7V0_QB_T(D@[)%2[1T${6", "]OPQAGC__XOKN7OR9Y_AS7W"],
	"word": "马到成功"
}, {
	"hex": ["K5QCTA@FP[22%0ZZZ[{`~`O", "N9ZX}8Q9}7{@2)FSK`4)YD6", "CFO08B9LWOBHYV_G}Y5ZUB3", "I`Q{A5T7DK7QUG@~%L46]3T"],
	"word": "马革裹尸"
}, {
	"hex": ["I8F[Y~8KB%J668[5JV6[)GI", "I8F[Y~8KB%J668[5JV6[)GI", "Y7M$L13B{$D)$EI@}U4HALY", "Y7M$L13B{$D)$EI@}U4HALY"],
	"word": "马马虎虎"
}, {
	"hex": ["HM{1WCZO0{SZ7YQGWGV9H~I", "PT@NJ)3`Y@KOF64N0CORX}O", "T5Y%}K]$1N)}MAF3ZI1C1SD", "`YHSF96PG%UT295}P(%Y6RY"],
	"word": "满面红光"
}, {
	"hex": ["HM{1WCZO0{SZ7YQGWGV9H~I", "[LVE`85IMDE4JWP1U4@LY77", "H5QU[_H(1B{[USU{A8Y(YBR", "F68WXQMVZK6`S@[WFVJQ_KN"],
	"word": "漫天要价"
}, {
	"hex": ["4`[I%N%JP0QIQHL}XS`J)JS", "@XY]@EKJCOGR0}JAG2CD50J", "CA7_46}C7S9A$Z~I_49K_AM", "9N004]A}RAC%@[{BYTCLZXO"],
	"word": "美中不足"
}, {
	"hex": ["PT@NJ)3`Y@KOF64N0CORX}O", "[WLXVKQ2]XJ~JLCPV]Q))1R", "BI]EBT7[F%0T%T$A3LZZWC3", "69}2F]68[%4O6U{2Y_1IC21"],
	"word": "面无人色"
}, {
	"hex": ["{S_A[Q8)IW7Y94X4M3%BD92", "5R5CSIFU0`)D~W@%_K4J76A", "WEHWKB]G582CZXBLTP}L3]1", "(~8AS`1L)`8$PLMSZGTRJ25"],
	"word": "鸣金收兵"
}, {
	"hex": ["9`2MO}ITWT5X2ZIKD3V(6GX", "5R5CSIFU0`)D~W@%_K4J76A", "Y$LZ%FBUMI8%%{NQ`[WW1(G", "AH4]U3`B(T$TW(}JVZOWTNA"],
	"word": "男才女貌"
}, {
	"hex": ["N~55(SH2R88N@PZ2P(XA$LS", "$I38NJS)X`4TKVL$T0DU8Q5", "3I7IF}4TKE@56{EYG%D63HF", "_16SI2TQSH2$RUN1X5YLA]H"],
	"word": "男欢女爱"
}, {
	"hex": ["K5QCTA@FP[22%0ZZZ[{`~`O", "]IHIRB3O8_TXW)R_VQA04ME", "DI@YVYF9P`FG@Y[IHW4IKUI", "(L2IJHCN5I9(U`GSWKILR7W"],
	"word": "难以置信"
}, {
	"hex": ["SR68QL(U%TT_%VM[@)@~Q)I", "H`)[_ZAMAN0}0~AL[3$_LUJ", "~BC@S4$74D~{RV$3M5W~6(F", "%U~)P7%{DX]22C379~6)YQM"],
	"word": "牛鬼蛇神"
}, {
	"hex": ["M3ZK[)X98@STN2$LHCXF()K", "9`2MO}ITWT5X2ZIKD3V(6GX", "U[9LEL_ZD%4EEUK1K[W$HIR", "BI]EBT7[F%0T%T$A3LZZWC3"],
	"word": "牛郎织女"
}, {
	"hex": ["M3ZK[)X98@STN2$LHCXF()K", "9`2MO}ITWT5X2ZIKD3V(6GX", "CFO08B9LWOBHYV_G}Y5ZUB3", "PT@NJ)3`Y@KOF64N0CORX}O"],
	"word": "牛头马面"
}, {
	"hex": ["VBU%_J2QL2FGS5WYNIS%7UA", "S~LW`Y7C8DV}Q91QC%Q`6HH", "@XY]@EKJCOGR0}JAG2CD50J", "S~LW`Y7C8DV}Q91QC%Q`6HH"],
	"word": "怒火中烧"
}, {
	"hex": ["N9ZX}8Q9}7{@2)FSK`4)YD6", "WK{C~[E(`I%TY@ILZKWW_TD", ")87BIFAMB2[SCJDT6Q1478L", "_F$J3PD8@Z@6N7`CY1E%%_D"],
	"word": "萍水相逢"
}, {
	"hex": ["UCI28L%UKTDML5H7{`VRYMU", "5`IG]4CLF7[EV~$04KJN2MT", "7_6}{HVJGCUK`RLR2O~%)H4", "5C062Z@`4W[FS6PH~ACJ2M9"],
	"word": "七上八下"
}, {
	"hex": ["6@@%PI]IHWAT~)JS(ZZ7B74", "WEHWKB]G582CZXBLTP}L3]1", "4U9HLYEAVVAXM_P5_72])4D", "9N004]A}RAC%@[{BYTCLZXO"],
	"word": "七手八脚"
}, {
	"hex": ["1TJ~1QD5AX6UC2%QXPS(DVF", "08[SR[4K9`VV~OC]~L[AQT5", "7_6}{HVJGCUK`RLR2O~%)H4", "LS4[EIC9QDFH3SJQ3)5}A~9"],
	"word": "七嘴八舌"
}, {
	"hex": ["21X4~YA]5(_62K`$}$HJ1GM", "%Z4%@]JSA0%O[(N[}HTN7MJ", "L%GHCHLD0Y@~KA[]7Z~8)BJ", "7[R844}%0OFGK]5`{V[WK)N"],
	"word": "齐心协力"
}, {
	"hex": ["W_{X5~JJYUQS]Y`UBN2F5TH", "9`2MO}ITWT5X2ZIKD3V(6GX", "1)O2N_6Q5IRJUCEG0[DY6A5", "UN~W8Q(LVE@`~FC}J6GH5)W"],
	"word": "千夫所指"
}, {
	"hex": ["U72BWH28@7AMPMT7B}]}7~F", "N~55(SH2R88N@PZ2P(XA$LS", "ZPH0$A6OV{2KGN1KU39@S`1", "K5QCTA@FP[22%0ZZZ[{`~`O"],
	"word": "千人一面"
}, {
	"hex": ["%G1B`SA[CGDEPJZ~3(Q_7N6", "G)JTAC)5{V(NO[]`%D(T[OL", "P{8L7H%`L73GHM%9KYRWT`J", "8X{2XF@`KSE_`P2XB@ZADUY"],
	"word": "枪林弹雨"
}, {
	"hex": ["_](PF0PC@R8D_ZM{5PN]RP7", "21X4~YA]5(_62K`$}$HJ1GM", "9SD[~NZG6E3UZ6KB(_@TUIR", "F9}3}{RYT(0(VWVJIB5%MNQ"],
	"word": "琴棋书画"
}, {
	"hex": ["TZT[YE~(`_8]DR24()2DPK4", "1A2L{B}FUPY008~[20I014A", "([`P3%60WO87HKO_G36S%OS", "CFO08B9LWOBHYV_G}Y5ZUB3"],
	"word": "青梅竹马"
}, {
	"hex": ["OBUYB]DH{3G3K21[[6~X{S8", "K5QCTA@FP[22%0ZZZ[{`~`O", "S1)M$FXSIM3K2ROB3LKY$$1", "K5QCTA@FP[22%0ZZZ[{`~`O"],
	"word": "求仁得仁"
}, {
	"hex": ["AO]0~{Y8JRBPW9$%80[SPJ8", "~}6SZVI`1U_EZLPFUHP7XMQ", "P4P[MSA1(J2ZBDY29MI0(%O", "WEHWKB]G582CZXBLTP}L3]1"],
	"word": "群龙无首"
}, {
	"hex": ["K5QCTA@FP[22%0ZZZ[{`~`O", "FR3WXQG71W_P7HSC%Q3}9TL", "A](3){YOPFTY@MF(7W6D394", "%Z4%@]JSA0%O[(N[}HTN7MJ"],
	"word": "人面兽心"
}, {
	"hex": ["BI]EBT7[F%0T%T$A3LZZWC3", "PNXM$AIU7YB9E5J$SLV(K95", "YY7V0_QB_T(D@[)%2[1T${6", "D4H6J(90(WSZZ%TRSGKHP$A"],
	"word": "人琴俱逝"
}, {
	"hex": ["ZCB4MRC0JOD@Y(E(J[TDRYL", "]OVVCH2HZO]H3)@)~{WL[NS", "ZCB4MRC0JOD@Y(E(J[TDRYL", "H$KAZU9@$4)DZM$8$9TRYD0"],
	"word": "人山人海"
}, {
	"hex": ["9`2MO}ITWT5X2ZIKD3V(6GX", "%U~)P7%{DX]22C379~6)YQM", "O)U47U5QA$@J%SDTR50XXFL", "I`Q{A5T7DK7QUG@~%L46]3T"],
	"word": "人神共愤"
}, {
	"hex": ["K5QCTA@FP[22%0ZZZ[{`~`O", "E39{U37D$M(J0D{`}3(1DWJ", "I8F[Y~8KB%J668[5JV6[)GI", "JF1@CW8DF5PKJ2]R7VSGJJ8"],
	"word": "人仰马翻"
}, {
	"hex": ["4HJ(B7S{63[%3%~D99RLCKV", "4HJ(B7S{63[%3%~D99RLCKV", "OE}5IQ)176(~_GCB84_L%@M", "OE}5IQ)176(~_GCB84_L%@M"],
	"word": "日日夜夜"
}, {
	"hex": ["IQ9@C~H76NQW{DB~_I)K)BV", "IQ9@C~H76NQW{DB~_I)K)BV", "D]L]DI8DC%1)7F24$O{}`PC", "D]L]DI8DC%1)7F24$O{}`PC"],
	"word": "日日夜夜"
}, {
	"hex": ["{~P9ANL%EB4$8}B(1V0HT_4", "2}JB2}6{KGC{CX9)~WQ{%Z7", "[WLXVKQ2]XJ~JLCPV]Q))1R", "`YHSF96PG%UT295}P(%Y6RY"],
	"word": "日月无光"
}, {
	"hex": ["FH}U1L6(Q%6(I~U~0S)05A6", "}H%{L_DRT[OE8]GI}6_4K2N", "WEHWKB]G582CZXBLTP}L3]1", "0JL)TDER1RT9%}4@NKJB4DX"],
	"word": "三皇五帝"
}, {
	"hex": ["FH}U1L6(Q%6(I~U~0S)05A6", "N~55(SH2R88N@PZ2P(XA$LS", "YY7V0_QB_T(D@[)%2[1T${6", "HJ[KUDU4}DMJXB{FYL4`XJR"],
	"word": "三人成虎"
}, {
	"hex": ["FH}U1L6(Q%6(I~U~0S)05A6", "WEHWKB]G582CZXBLTP}L3]1", "YY7V0_QB_T(D@[)%2[1T${6", "AO]0~{Y8JRBPW9$%80[SPJ8"],
	"word": "三五成群"
}, {
	"hex": ["~TPINOW{}WLMRD_IMJUNQZW", "3`Z3CZ~LS7N2UJZH)25@4LK", "S$V[8IML7B`@]B39XWZ3VIF", "S8I1UYSA3E1_CZG9HMVW]QL"],
	"word": "三心二意"
}, {
	"hex": ["FH}U1L6(Q%6(I~U~0S)05A6", "E39{U37D$M(J0D{`}3(1DWJ", "EUH[KFYN}V}9V77POVH{0(S", "{~P9ANL%EB4$8}B(1V0HT_4"],
	"word": "三羊开泰"
}, {
	"hex": ["~BC@S4$74D~{RV$3M5W~6(F", "FF1ITH`(@Z$20Y%J%}_3YNJ", "]IHIRB3O8_TXW)R_VQA04ME", "_IO_RS]{~(%04NF]CUA5MU0"],
	"word": "蛇鼠一窝"
}, {
	"hex": ["~BC@S4$74D~{RV$3M5W~6(F", "FF1ITH`(@Z$20Y%J%}_3YNJ", "{DWVE`UPU5}UWI%M76NUFBK", "NP`}]6~6ZXRJ8(`~$14JHFJ"],
	"word": "蛇鼠一窝"
}, {
	"hex": ["F@KZ6_536)JK$EJGUNNQRES", "6OL[HQ0DBD4F`~Y}YJGW)@A", "_~@(@LPT$030X%QB3UYUV46", "BI]EBT7[F%0T%T$A3LZZWC3"],
	"word": "舍己救人"
}, {
	"hex": ["U1KZUP_TP35PUE3H8E1OYCN", "2X5_U{YMX}]NGLP{8O5@B3F", "AMZ)2V[2HY5G_S[{Y}T(UJE", "8X{2XF@`KSE_`P2XB@ZADUY"],
	"word": "十风五雨"
}, {
	"hex": ["D4H6J(90(WSZZ%TRSGKHP$A", "9`2MO}ITWT5X2ZIKD3V(6GX", "4}`$0~M8@S9VIB9{WQCC6A2", "_RTFARG(NUO_IULGEQZAU3C"],
	"word": "十面埋伏"
}, {
	"hex": ["W``GSE)8(Z75KX3%~0IR@IP", "[){9G]{F}PKKQ3C`@(E1F]3", "4I`MDUI8B2C]KU_[AI$HZ_Y", "4`[I%N%JP0QIQHL}XS`J)JS"],
	"word": "十全十美"
}, {
	"word": "十生九死",
	"hex": ["U1KZUP_TP35PUE3H8E1OYCN", "CI]~O3RMBK$FMEM]ZP$SQQ7", "~FBGH]Z7JZTN4(F)FMY_E3K", "~2TW7Q@6@M7CNA7JLN`LMTF"]
}, {
	"hex": ["U1KZUP_TP35PUE3H8E1OYCN", "U1KZUP_TP35PUE3H8E1OYCN", "[WLXVKQ2]XJ~JLCPV]Q))1R", "[WLXVKQ2]XJ~JLCPV]Q))1R"],
	"word": "十十五五"
}, {
	"word": "十指连心",
	"hex": ["I`Q{A5T7DK7QUG@~%L46]3T", "WEHWKB]G582CZXBLTP}L3]1", "BI]EBT7[F%0T%T$A3LZZWC3", "%Z4%@]JSA0%O[(N[}HTN7MJ"]
}, {
	"hex": ["WEHWKB]G582CZXBLTP}L3]1", "OHNQ$PJY6PRF)_H7)3}YK0N", "H@ZU({0Q5VV](7D%KQ%(9}Q", "5XSW_8$4YN`R]8YVHS}(@ZX"],
	"word": "手高眼低"
}, {
	"hex": ["WEHWKB]G582CZXBLTP}L3]1", "9N004]A}RAC%@[{BYTCLZXO", "%PE{B8W}_YEGXHC_D_IK~(G", "P4P[MSA1(J2ZBDY29MI0(%O"],
	"word": "手足无措"
}, {
	"hex": ["WEHWKB]G582CZXBLTP}L3]1", "WEHWKB]G582CZXBLTP}L3]1", "P4P[MSA1(J2ZBDY29MI0(%O", "WRXK(N(M~9PI`W}$}68UD$P"],
	"word": "授受不亲"
}, {
	"hex": ["5C2NMMQTKNNPKO1RVMPMJBD", "PT@NJ)3`Y@KOF64N0CORX}O", "(E7SZT)[KP1E`K4)6IRS))J", "[EX)AYH%VKFZVRVBG1{_A}1"],
	"word": "四面楚歌"
}, {
	"hex": ["C}}[~6B3~6[2O[(Y0$ALOPW", "CA7_46}C7S9A$Z~I_49K_AM", "%WLIU6QE1T[XIU~H%{TW%%7", "]@YQO(CZ$0E0IAKGRWI5WO6"],
	"word": "肆无忌惮"
}, {
	"hex": ["J}M~91QGML~`@IXS$)I}S5R", "J}M~91QGML~`@IXS$)I}S5R", "N9ZX}8Q9}7{@2)FSK`4)YD6", "%K7OD)XHUEJWT$C{OG8K4[4"],
	"word": "岁岁平安"
}, {
	"hex": ["ZLOI%S]LAYZ}_R99V~[5$[L", "U[9LEL_ZD%4EEUK1K[W$HIR", "((S3Y1~~RK_%V9[(]`4T{L5", "((S3Y1~~RK_%V9[(]`4T{L5"],
	"word": "逃之夭夭"
}, {
	"hex": ["[LVE`85IMDE4JWP1U4@LY77", "G6APQ@N6MWKJPDD`KMXL{WK", "D]L]DI8DC%1)7F24$O{}`PC", "PNXM$AIU7YB9E5J$SLV(K95"],
	"word": "天方夜谭"
}, {
	"hex": ["M%GA9$0[S0CYQ{ACM_QU]E1", "CFO08B9LWOBHYV_G}Y5ZUB3", "N~55(SH2R88N@PZ2P(XA$LS", "%PE{B8W}_YEGXHC_D_IK~(G"],
	"word": "天马行空"
}, {
	"hex": ["KU~V2S)[7AAGOAP~)FZZ7C3", "5`IG]4CLF7[EV~$04KJN2MT", "N~55(SH2R88N@PZ2P(XA$LS", "F68WXQMVZK6`S@[WFVJQ_KN"],
	"word": "天上人间"
}, {
	"hex": ["{MYM5{_SRSE[%08FW4D~}%D", "C}}[~6B3~6[2O[(Y0$ALOPW", "@(E_MLX3JTZKN)1M(OSN0@S", "DI@YVYF9P`FG@Y[IHW4IKUI"],
	"word": "兔死狐悲"
}, {
	"hex": ["FL2S@0NM0N5CCF2S{HS(%T3", "H@ZU({0Q5VV](7D%KQ%(9}Q", "LTS`JKM)JC]GUEQ]PLFR9@8", "{ZG@H(GBBX8RZ48E()LMNAO"],
	"word": "望眼欲穿"
}, {
	"hex": ["C48I@FQ(WKB[{)2@2U~`_{0", "2X5_U{YMX}]NGLP{8O5@B3F", "YH1KC7R`~78G}Y_49@4S3~9", "PT@NJ)3`Y@KOF64N0CORX}O"],
	"word": "威风八面"
}, {
	"hex": ["NP`}]6~6ZXRJ8(`~$14JHFJ", "%WLIU6QE1T[XIU~H%{TW%%7", "B2MTRA423A)9P`[W%((3GM9", "3I7IF}4TKE@56{EYG%D63HF"],
	"word": "闻鸡起舞"
}, {
	"hex": ["[WLXVKQ2]XJ~JLCPV]Q))1R", "%PE{B8W}_YEGXHC_D_IK~(G", "CA7_46}C7S9A$Z~I_49K_AM", "8FR6P@U)7JSO}53C4VF~6XD"],
	"word": "无孔不入"
}, {
	"hex": ["AMZ)2V[2HY5G_S[{Y}T(UJE", "2X5_U{YMX}]NGLP{8O5@B3F", "4I`MDUI8B2C]KU_[AI$HZ_Y", "8X{2XF@`KSE_`P2XB@ZADUY"],
	"word": "五风十雨"
}, {
	"word": "五零四散",
	"hex": ["[WLXVKQ2]XJ~JLCPV]Q))1R", "D}4]NX9L0UA91EMD$B{4KZO", "C}}[~6B3~6[2O[(Y0$ALOPW", "8X{2XF@`KSE_`P2XB@ZADUY"]
}, {
	"hex": ["L)5W37U)B)%A3035JC{A_PT", "SS}BT@DYS1O}PTL_I~$~6L0", "X@DSHL)}4B_JVSR3I3FTNE0", "QBHO~D%B_59OH5TDLN0$I5X"],
	"word": "喜怒哀乐"
}, {
	"hex": ["QBHO~D%B_59OH5TDLN0$I5X", "5`IG]4CLF7[EV~$04KJN2MT", "1A2L{B}FUPY008~[20I014A", "S~LW`Y7C8DV}Q91QC%Q`6HH"],
	"word": "喜上眉梢"
}, {
	"hex": ["$T0GN`LMNBC9{5M}`3C8]GE", "H@ZU({0Q5VV](7D%KQ%(9}Q", "{_Z[~4]~(V2WRSZAOWZQ@ZU", "O72%G]PWNNFRCU4VII4US`1"],
	"word": "相见恨晚"
}, {
	"hex": [")87BIFAMB2[SCJDT6Q1478L", "[A(64V{OUT1B0GUXQ~YUC$8", ")87BIFAMB2[SCJDT6Q1478L", "AGP@OWCP02XQ(AB0T%C2%VQ"],
	"word": "相亲相爱"
}, {
	"hex": [")87BIFAMB2[SCJDT6Q1478L", "83W(PLONY1NJGV2ZO~RJ{HB", "3I7IF}4TKE@56{EYG%D63HF", "K5QCTA@FP[22%0ZZZ[{`~`O"],
	"word": "香草美人"
}, {
	"hex": ["%EU33{[%JZW`6`9SW@O}$W7", "EFPTN`5L2WLUXWFC8QG~83T", "$}AHD)P_]LVO29KGB%WONAP", "N~C7NOY~03VN7XYAI6$QHML"],
	"word": "携手并肩"
}, {
	"hex": ["YHHGAFN9WG7EWU8B@OTLD{W", "WEHWKB]G582CZXBLTP}L3]1", "(~8AS`1L)`8$PLMSZGTRJ25", "N~C7NOY~03VN7XYAI6$QHML"],
	"word": "携手并肩"
}, {
	"hex": ["3`Z3CZ~LS7N2UJZH)25@4LK", "P4AE{_FZJ`NL~MG$83[0YCN", "M%GA9$0[S0CYQ{ACM_QU]E1", "OHNQ$PJY6PRF)_H7)3}YK0N"],
	"word": "心比天高"
}, {
	"hex": ["%Z4%@]JSA0%O[(N[}HTN7MJ", "%PE{B8W}_YEGXHC_D_IK~(G", "{DWVE`UPU5}UWI%M76NUFBK", "I8F[Y~8KB%J668[5JV6[)GI"],
	"word": "心猿意马"
}, {
	"hex": ["%Z4%@]JSA0%O[(N[}HTN7MJ", "KJ%FW]LK5JNO9MYSL5[@M`U", "9N004]A}RAC%@[{BYTCLZXO", "V54BR%R4{HNQ1MYECQRX3YQ"],
	"word": "心照不宣"
}, {
	"hex": ["T0W1F%X~NBVCQ$RG52L0EE6", "DPX%]3EL4C%GG5B{~(Z)[@G", "7OXIBD8%}F8M5_@0`U2[_PB", "@(Y@GEET3TGF7JIM0FA813S"],
	"word": "星罗棋布"
}, {
	"hex": ["T_ZKW6KJ_X{%[%P_AY$`(]X", "5R5CSIFU0`)D~W@%_K4J76A", "2}JB2}6{KGC{CX9)~WQ{%Z7", "4W}[)MLG0FZP)}PCEI@1LK7"],
	"word": "星前月下"
}, {
	"hex": ["A507Y0F(73OQOTR{0O)NGZI", "I`Q{A5T7DK7QUG@~%L46]3T", "S8I1UYSA3E1_CZG9HMVW]QL", "I`Q{A5T7DK7QUG@~%L46]3T"],
	"word": "雄视一世"
}, {
	"hex": ["9SD[~NZG6E3UZ6KB(_@TUIR", "5R5CSIFU0`)D~W@%_K4J76A", "WEHWKB]G582CZXBLTP}L3]1", "EUH[KFYN}V}9V77POVH{0(S"],
	"word": "学富五车"
}, {
	"hex": ["V}JS(1~DIWZ}`{DKNN7FVCX", "$8P3)ZLAZA{HX%[VDN8T%YA", "T[MP6N[TJ%O]OF(YHSDNCOV", "J{34WCZ65PYFJ`PC~M0BY`I"],
	"word": "掩耳盗铃"
}, {
	"hex": ["ALJ4@UAID6IC4VGE4B4)IHK", "K5QCTA@FP[22%0ZZZ[{`~`O", "$8P3)ZLAZA{HX%[VDN8T%YA", "H@ZU({0Q5VV](7D%KQ%(9}Q"],
	"word": "掩人耳目"
}, {
	"hex": ["H@ZU({0Q5VV](7D%KQ%(9}Q", "5`IG]4CLF7[EV~$04KJN2MT", "WEHWKB]G582CZXBLTP}L3]1", "5C062Z@`4W[FS6PH~ACJ2M9"],
	"word": "眼高手低"
}, {
	"hex": ["S4%9(NSX233_$DH44TTTBCI", "S4%9(NSX233_$DH44TTTBCI", "S1)M$FXSIM3K2ROB3LKY$$1", "2F$CIZC%OLL%IC~3N)K}3YD"],
	"word": "洋洋得意"
}, {
	"hex": ["E39{U37D$M(J0D{`}3(1DWJ", "K5QCTA@FP[22%0ZZZ[{`~`O", "F68WXQMVZK6`S@[WFVJQ_KN", "]OPQAGC__XOKN7OR9Y_AS7W"],
	"word": "养儿防老"
}, {
	"hex": ["E39{U37D$M(J0D{`}3(1DWJ", "Y7M$L13B{$D)$EI@}U4HALY", "}G][OE]`UZNQ)7$[8Z6R_NL", "JOG(9(_0ME7NQCMDU6KUUM7"],
	"word": "养虎为患"
}, {
	"hex": ["E39{U37D$M(J0D{`}3(1DWJ", "_IO_RS]{~(%04NF]CUA5MU0", "S~LW`Y7C8DV}Q91QC%Q`6HH", "LLYXF9H612_TOKXXX}$`K@8"],
	"word": "养家活口"
}, {
	"hex": ["(FNXNDEG{NP}{J`D$VJ7ZZ4", "]OPQAGC__XOKN7OR9Y_AS7W", "FH}U1L6(Q%6(I~U~0S)05A6", "~}6SZVI`1U_EZLPFUHP7XMQ"],
	"word": "叶公好龙"
}, {
	"word": "一悲一喜",
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "O6ZF%W9MGN78_8{8_P9UBQ5", "ZPH0$A6OV{2KGN1KU39@S`1", "}QQNUFQFC_}Q5M9)SBYO39H"]
}, {
	"word": "一朝一夕",
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "{~P9ANL%EB4$8}B(1V0HT_4", "ZPH0$A6OV{2KGN1KU39@S`1", "2}JB2}6{KGC{CX9)~WQ{%Z7"]
}, {
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "0OK@COF(`VT)077NK`2~DO3", "MVH0DXNY~]FZOD2X)ZEAP0H", "NG67TZFE073LM[_2E]FSD0Z"],
	"word": "一槌定音"
}, {
	"hex": ["{DWVE`UPU5}UWI%M76NUFBK", "KU~V2S)[7AAGOAP~)FZZ7C3", "O3WQ)C1S%G`35I`J59L`5VW", "[LVE`85IMDE4JWP1U4@LY77"],
	"word": "一飞冲天"
}, {
	"hex": ["]IHIRB3O8_TXW)R_VQA04ME", "U]AOJ}6BICTK[L(1@GX[$F4", "N3B7{O70B_]ZJR%N7~IQ)YN", "9KE3SIPIL{T0F~)03A%[(TA"],
	"word": "一见钟情"
}, {
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "TP2H[}K$%03{2[LRA@2TL5H", "S$V[8IML7B`@]B39XWZ3VIF", "S1)M$FXSIM3K2ROB3LKY$$1"],
	"word": "一举两得"
}, {
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "~}6SZVI`1U_EZLPFUHP7XMQ", "ZPH0$A6OV{2KGN1KU39@S`1", "~BC@S4$74D~{RV$3M5W~6(F"],
	"word": "一龙一蛇"
}, {
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "~}6SZVI`1U_EZLPFUHP7XMQ", "ZPH0$A6OV{2KGN1KU39@S`1", "X`XX$4}QX3X5YG3G_T_G6ZS"],
	"word": "一龙一猪"
}, {
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "}GX`Y]VC7NBW_XQ9%U@}TI9", "%WLIU6QE1T[XIU~H%{TW%%7", "%K7OD)XHUEJWT$C{OG8K4[4"],
	"word": "一拍即合"
}, {
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "D4H6J(90(WSZZ%TRSGKHP$A", "AMZ)2V[2HY5G_S[{Y}T(UJE", "YY7V0_QB_T(D@[)%2[1T${6"],
	"word": "一事无成"
}, {
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "%Z4%@]JSA0%O[(N[}HTN7MJ", "S8I1UYSA3E1_CZG9HMVW]QL", "ZPH0$A6OV{2KGN1KU39@S`1"],
	"word": "一心一意"
}, {
	"hex": ["{DWVE`UPU5}UWI%M76NUFBK", "R5N]H_QN65HE@E`VE0SM]NN", "U]AOJ}6BICTK[L(1@GX[$F4", "$G0]_Z33CI7DBW%A@BPFG5X"],
	"word": "一针见血"
}, {
	"hex": ["W{{EP)36E7LF_%G(M6AP_ZV", "W``GSE)8(Z75KX3%~0IR@IP", "]OPQAGC__XOKN7OR9Y_AS7W", "(]II5ZE)9K8UV0P2}17Y7{5"],
	"word": "衣食父母"
}, {
	"hex": ["]IHIRB3O8_TXW)R_VQA04ME", "S1)M$FXSIM3K2ROB3LKY$$1", "6)ZIJ%_BVVE{0BO}V4020RM", "KGM`}K($2K1DIXW}A$J`YL6"],
	"word": "以德报怨"
}, {
	"hex": ["S8I1UYSA3E1_CZG9HMVW]QL", "$8P3)ZLAZA{HX%[VDN8T%YA", "6)ZIJ%_BVVE{0BO}V4020RM", "H@ZU({0Q5VV](7D%KQ%(9}Q"],
	"word": "以耳代目"
}, {
	"hex": ["]IHIRB3O8_TXW)R_VQA04ME", "H@ZU({0Q5VV](7D%KQ%(9}Q", "H{DVOHBB@H_Y@%_~6SY@BLH", "QBHO~D%B_59OH5TDLN0$I5X"],
	"word": "以观后效"
}, {
	"hex": ["UJY0X2Q52PI[2ACUWRW%$(R", "I8F[Y~8KB%J668[5JV6[)GI", "JS{H3PKBG[6_NFME4%FUH29", "6)ZIJ%_BVVE{0BO}V4020RM"],
	"word": "倚马可待"
}, {
	"hex": ["2%QUC6W)F0~4$@YI0D1_2UM", "FR3WXQG71W_P7HSC%Q3}9TL", "N~55(SH2R88N@PZ2P(XA$LS", "3I7IF}4TKE@56{EYG%D63HF"],
	"word": "饮食男女"
}, {
	"hex": ["G7P32E%(P61T)I@1OTHJ)BX", "%Z4%@]JSA0%O[(N[}HTN7MJ", "P4P[MSA1(J2ZBDY29MI0(%O", ")ZFFI8_1[~00WG)JD[[MGUR"],
	"word": "有心无力"
}, {
	"hex": ["2ZGA8U%[IZJ6]5QQ7K38KUV", "QKDJBH_KO4YG4F[3{(ZUB[F", "NIX%Y0BJ@VAJ2CK$~PL71{H", "W``GSE)8(Z75KX3%~0IR@IP"],
	"word": "余音绕梁"
}, {
	"hex": ["N[O{`WN5GLP4XJFBGQ@EVCV", "]$YF3_PJ~CE($48R0B3]B`4", "WA~65N(6K9F7UL$BL{91})4", "1$`748[M30P)YBX21P6L~3E"],
	"word": "鱼目混珠"
}, {
	"hex": ["KGM`}K($2K1DIXW}A$J`YL6", "KGM`}K($2K1DIXW}A$J`YL6", "67OG8)Z0%_W09_X{D(9S%HU", "67OG8)Z0%_W09_X{D(9S%HU"],
	"word": "原原本本"
}, {
	"hex": ["[LVE`85IMDE4JWP1U4@LY77", "[LVE`85IMDE4JWP1U4@LY77", "@XY]@EKJCOGR0}JAG2CD50J", "CI]~O3RMBK$FMEM]ZP$SQQ7"],
	"word": "芸芸众生"
}, {
	"hex": ["R5N]H_QN65HE@E`VE0SM]NN", "2X5_U{YMX}]NGLP{8O5@B3F", ")87BIFAMB2[SCJDT6Q1478L", "23PW0@T~S)U_V`LRNR8ZHIY"],
	"word": "针锋相对"
}, {
	"hex": ["NP`}]6~6ZXRJ8(`~$14JHFJ", "NP`}]6~6ZXRJ8(`~$14JHFJ", "{~P9ANL%EB4$8}B(1V0HT_4", "ZPH0$A6OV{2KGN1KU39@S`1"],
	"word": "蒸蒸日上"
}, {
	"hex": ["%EU33{[%JZW`6`9SW@O}$W7", "ZPH0$A6OV{2KGN1KU39@S`1", "PNXM$AIU7YB9E5J$SLV(K95", "Y79AZ$NLICT2_ZK5NZLU[`T"],
	"word": "纸上谈兵"
}, {
	"hex": ["Y{2~WZYDMLPEUR@1WJO2}FW", "9`2MO}ITWT5X2ZIKD3V(6GX", "}G][OE]`UZNQ)7$[8Z6R_NL", "5GYUH1D9WW)JQRS2F[_VB4L"],
	"word": "指腹为婚"
}, {
	"hex": ["UN~W8Q(LVE@`~FC}J6GH5)W", "WEHWKB]G582CZXBLTP}L3]1", "F9}3}{RYT(0(VWVJIB5%MNQ", "9N004]A}RAC%@[{BYTCLZXO"],
	"word": "指手画脚"
}, {
	"hex": ["ZPH0$A6OV{2KGN1KU39@S`1", "CI]~O3RMBK$FMEM]ZP$SQQ7", "1TJ~1QD5AX6UC2%QXPS(DVF", "E39{U37D$M(J0D{`}3(1DWJ"],
	"word": "趾高气扬"
}, {
	"hex": ["N3B7{O70B_]ZJR%N7~IQ)YN", "@XY]@EKJCOGR0}JAG2CD50J", "E88GZPUWFVDHABP)KB6_FYJ", "~2TW7Q@6@M7CNA7JLN`LMTF"],
	"word": "冢中枯骨"
}, {
	"hex": ["X`XX$4}QX3X5YG3G_T_G6ZS", "23PW0@T~S)U_V`LRNR8ZHIY", ")O6WIX$`F195J{R@5JFL(I4", "23PW0@T~S)U_V`LRNR8ZHIY"],
	"word": "猪朋狗友"
}, {
	"hex": ["X`XX$4}QX3X5YG3G_T_G6ZS", "C}}[~6B3~6[2O[(Y0$ALOPW", "CFO08B9LWOBHYV_G}Y5ZUB3", "9N004]A}RAC%@[{BYTCLZXO"],
	"word": "蛛丝马迹"
}, {
	"hex": ["N~55(SH2R88N@PZ2P(XA$LS", "I8F[Y~8KB%J668[5JV6[)GI", "H@ZU({0Q5VV](7D%KQ%(9}Q", "FZK9(CP}P_K5@GCZ${{PW]B"],
	"word": "走马观花"
}, {
	"hex": ["9N004]A}RAC%@[{BYTCLZXO", "W``GSE)8(Z75KX3%~0IR@IP", "9N004]A}RAC%@[{BYTCLZXO", "(~8AS`1L)`8$PLMSZGTRJ25"],
	"word": "足食足兵"
}];