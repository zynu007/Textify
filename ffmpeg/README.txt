FFmpeg 64-bit static Windows build from www.gyan.dev

Version: 2025-02-06-git-6da82b4485-full_build-www.gyan.dev

License: GPL v3

Source Code: https://github.com/FFmpeg/FFmpeg/commit/6da82b4485

External Assets
frei0r plugins:   https://www.gyan.dev/ffmpeg/builds/ffmpeg-frei0r-plugins
lensfun database: https://www.gyan.dev/ffmpeg/builds/ffmpeg-lensfun-db

git-full build configuration: 

ARCH                      x86 (generic)
big-endian                no
runtime cpu detection     yes
standalone assembly       yes
x86 assembler             nasm
MMX enabled               yes
MMXEXT enabled            yes
3DNow! enabled            yes
3DNow! extended enabled   yes
SSE enabled               yes
SSSE3 enabled             yes
AESNI enabled             yes
AVX enabled               yes
AVX2 enabled              yes
AVX-512 enabled           yes
AVX-512ICL enabled        yes
XOP enabled               yes
FMA3 enabled              yes
FMA4 enabled              yes
i686 features enabled     yes
CMOV is fast              yes
EBX available             yes
EBP available             yes
debug symbols             yes
strip symbols             yes
optimize for size         no
optimizations             yes
static                    yes
shared                    no
postprocessing support    yes
network support           yes
threading support         pthreads
safe bitstream reader     yes
texi2html enabled         no
perl enabled              yes
pod2man enabled           yes
makeinfo enabled          yes
makeinfo supports HTML    yes
xmllint enabled           yes

External libraries:
avisynth                libgsm                  libsvtav1
bzlib                   libharfbuzz             libtheora
chromaprint             libilbc                 libtwolame
frei0r                  libjxl                  libuavs3d
gmp                     liblc3                  libvidstab
gnutls                  liblensfun              libvmaf
iconv                   libmodplug              libvo_amrwbenc
ladspa                  libmp3lame              libvorbis
lcms2                   libmysofa               libvpx
libaom                  libopencore_amrnb       libvvenc
libaribb24              libopencore_amrwb       libwebp
libaribcaption          libopenjpeg             libx264
libass                  libopenmpt              libx265
libbluray               libopus                 libxavs2
libbs2b                 libplacebo              libxevd
libcaca                 libqrencode             libxeve
libcdio                 libquirc                libxml2
libcodec2               librav1e                libxvid
libdav1d                librist                 libzimg
libdavs2                librubberband           libzmq
libdvdnav               libshaderc              libzvbi
libdvdread              libshine                lzma
libflite                libsnappy               mediafoundation
libfontconfig           libsoxr                 sdl2
libfreetype             libspeex                zlib
libfribidi              libsrt
libgme                  libssh

External libraries providing hardware acceleration:
amf                     d3d12va                 nvdec
cuda                    dxva2                   nvenc
cuda_llvm               ffnvcodec               opencl
cuvid                   libmfx                  vaapi
d3d11va                 libvpl                  vulkan

Libraries:
avcodec                 avformat                swresample
avdevice                avutil                  swscale
avfilter                postproc

Programs:
ffmpeg                  ffplay                  ffprobe

Enabled decoders:
aac                     g723_1                  pcm_vidc
aac_fixed               g729                    pcx
aac_latm                gdv                     pdv
aasc                    gem                     pfm
ac3                     gif                     pgm
ac3_fixed               gremlin_dpcm            pgmyuv
acelp_kelvin            gsm                     pgssub
adpcm_4xm               gsm_ms                  pgx
adpcm_adx               h261                    phm
adpcm_afc               h263                    photocd
adpcm_agm               h263i                   pictor
adpcm_aica              h263p                   pixlet
adpcm_argo              h264                    pjs
adpcm_ct                h264_amf                png
adpcm_dtk               h264_cuvid              ppm
adpcm_ea                h264_qsv                prores
adpcm_ea_maxis_xa       hap                     prosumer
adpcm_ea_r1             hca                     psd
adpcm_ea_r2             hcom                    ptx
adpcm_ea_r3             hdr                     qcelp
adpcm_ea_xas            hevc                    qdm2
adpcm_g722              hevc_amf                qdmc
adpcm_g726              hevc_cuvid              qdraw
adpcm_g726le            hevc_qsv                qoa
adpcm_ima_acorn         hnm4_video              qoi
adpcm_ima_alp           hq_hqa                  qpeg
adpcm_ima_amv           hqx                     qtrle
adpcm_ima_apc           huffyuv                 r10k
adpcm_ima_apm           hymt                    r210
adpcm_ima_cunning       iac                     ra_144
adpcm_ima_dat4          idcin                   ra_288
adpcm_ima_dk3           idf                     ralf
adpcm_ima_dk4           iff_ilbm                rasc
adpcm_ima_ea_eacs       ilbc                    rawvideo
adpcm_ima_ea_sead       imc                     realtext
adpcm_ima_iss           imm4                    rka
adpcm_ima_moflex        imm5                    rl2
adpcm_ima_mtf           indeo2                  roq
adpcm_ima_oki           indeo3                  roq_dpcm
adpcm_ima_qt            indeo4                  rpza
adpcm_ima_rad           indeo5                  rscc
adpcm_ima_smjpeg        interplay_acm           rtv1
adpcm_ima_ssi           interplay_dpcm          rv10
adpcm_ima_wav           interplay_video         rv20
adpcm_ima_ws            ipu                     rv30
adpcm_ima_xbox          jacosub                 rv40
adpcm_ms                jpeg2000                rv60
adpcm_mtaf              jpegls                  s302m
adpcm_psx               jv                      sami
adpcm_sbpro_2           kgv1                    sanm
adpcm_sbpro_3           kmvc                    sbc
adpcm_sbpro_4           lagarith                scpr
adpcm_swf               lead                    screenpresso
adpcm_thp               libaom_av1              sdx2_dpcm
adpcm_thp_le            libaribb24              sga
adpcm_vima              libaribcaption          sgi
adpcm_xa                libcodec2               sgirle
adpcm_xmd               libdav1d                sheervideo
adpcm_yamaha            libdavs2                shorten
adpcm_zork              libgsm                  simbiosis_imx
agm                     libgsm_ms               sipr
aic                     libilbc                 siren
alac                    libjxl                  smackaud
alias_pix               libjxl_anim             smacker
als                     liblc3                  smc
amrnb                   libopencore_amrnb       smvjpeg
amrwb                   libopencore_amrwb       snow
amv                     libopus                 sol_dpcm
anm                     libspeex                sonic
ansi                    libuavs3d               sp5x
anull                   libvorbis               speedhq
apac                    libvpx_vp8              speex
ape                     libvpx_vp9              srgc
apng                    libxevd                 srt
aptx                    libzvbi_teletext        ssa
aptx_hd                 loco                    stl
arbc                    lscr                    subrip
argo                    m101                    subviewer
ass                     mace3                   subviewer1
asv1                    mace6                   sunrast
asv2                    magicyuv                svq1
atrac1                  mdec                    svq3
atrac3                  media100                tak
atrac3al                metasound               targa
atrac3p                 microdvd                targa_y216
atrac3pal               mimic                   tdsc
atrac9                  misc4                   text
aura                    mjpeg                   theora
aura2                   mjpeg_cuvid             thp
av1                     mjpeg_qsv               tiertexseqvideo
av1_amf                 mjpegb                  tiff
av1_cuvid               mlp                     tmv
av1_qsv                 mmvideo                 truehd
avrn                    mobiclip                truemotion1
avrp                    motionpixels            truemotion2
avs                     movtext                 truemotion2rt
avui                    mp1                     truespeech
bethsoftvid             mp1float                tscc
bfi                     mp2                     tscc2
bink                    mp2float                tta
binkaudio_dct           mp3                     twinvq
binkaudio_rdft          mp3adu                  txd
bintext                 mp3adufloat             ulti
bitpacked               mp3float                utvideo
bmp                     mp3on4                  v210
bmv_audio               mp3on4float             v210x
bmv_video               mpc7                    v308
bonk                    mpc8                    v408
brender_pix             mpeg1_cuvid             v410
c93                     mpeg1video              vb
cavs                    mpeg2_cuvid             vble
cbd2_dpcm               mpeg2_qsv               vbn
ccaption                mpeg2video              vc1
cdgraphics              mpeg4                   vc1_cuvid
cdtoons                 mpeg4_cuvid             vc1_qsv
cdxl                    mpegvideo               vc1image
cfhd                    mpl2                    vcr1
cinepak                 msa1                    vmdaudio
clearvideo              mscc                    vmdvideo
cljr                    msmpeg4v1               vmix
cllc                    msmpeg4v2               vmnc
comfortnoise            msmpeg4v3               vnull
cook                    msnsiren                vorbis
cpia                    msp2                    vp3
cri                     msrle                   vp4
cscd                    mss1                    vp5
cyuv                    mss2                    vp6
dca                     msvideo1                vp6a
dds                     mszh                    vp6f
derf_dpcm               mts2                    vp7
dfa                     mv30                    vp8
dfpwm                   mvc1                    vp8_cuvid
dirac                   mvc2                    vp8_qsv
dnxhd                   mvdv                    vp9
dolby_e                 mvha                    vp9_cuvid
dpx                     mwsc                    vp9_qsv
dsd_lsbf                mxpeg                   vplayer
dsd_lsbf_planar         nellymoser              vqa
dsd_msbf                notchlc                 vqc
dsd_msbf_planar         nuv                     vvc
dsicinaudio             on2avc                  vvc_qsv
dsicinvideo             opus                    wady_dpcm
dss_sp                  osq                     wavarc
dst                     paf_audio               wavpack
dvaudio                 paf_video               wbmp
dvbsub                  pam                     wcmv
dvdsub                  pbm                     webp
dvvideo                 pcm_alaw                webvtt
dxa                     pcm_bluray              wmalossless
dxtory                  pcm_dvd                 wmapro
dxv                     pcm_f16le               wmav1
eac3                    pcm_f24le               wmav2
eacmv                   pcm_f32be               wmavoice
eamad                   pcm_f32le               wmv1
eatgq                   pcm_f64be               wmv2
eatgv                   pcm_f64le               wmv3
eatqi                   pcm_lxf                 wmv3image
eightbps                pcm_mulaw               wnv1
eightsvx_exp            pcm_s16be               wrapped_avframe
eightsvx_fib            pcm_s16be_planar        ws_snd1
escape124               pcm_s16le               xan_dpcm
escape130               pcm_s16le_planar        xan_wc3
evrc                    pcm_s24be               xan_wc4
exr                     pcm_s24daud             xbin
fastaudio               pcm_s24le               xbm
ffv1                    pcm_s24le_planar        xface
ffvhuff                 pcm_s32be               xl
ffwavesynth             pcm_s32le               xma1
fic                     pcm_s32le_planar        xma2
fits                    pcm_s64be               xpm
flac                    pcm_s64le               xsub
flashsv                 pcm_s8                  xwd
flashsv2                pcm_s8_planar           y41p
flic                    pcm_sga                 ylc
flv                     pcm_u16be               yop
fmvc                    pcm_u16le               yuv4
fourxm                  pcm_u24be               zero12v
fraps                   pcm_u24le               zerocodec
frwu                    pcm_u32be               zlib
ftr                     pcm_u32le               zmbv
g2m                     pcm_u8

Enabled encoders:
a64multi                hevc_nvenc              pcm_s32le_planar
a64multi5               hevc_qsv                pcm_s64be
aac                     hevc_vaapi              pcm_s64le
aac_mf                  hevc_vulkan             pcm_s8
ac3                     huffyuv                 pcm_s8_planar
ac3_fixed               jpeg2000                pcm_u16be
ac3_mf                  jpegls                  pcm_u16le
adpcm_adx               libaom_av1              pcm_u24be
adpcm_argo              libcodec2               pcm_u24le
adpcm_g722              libgsm                  pcm_u32be
adpcm_g726              libgsm_ms               pcm_u32le
adpcm_g726le            libilbc                 pcm_u8
adpcm_ima_alp           libjxl                  pcm_vidc
adpcm_ima_amv           libjxl_anim             pcx
adpcm_ima_apm           liblc3                  pfm
adpcm_ima_qt            libmp3lame              pgm
adpcm_ima_ssi           libopencore_amrnb       pgmyuv
adpcm_ima_wav           libopenjpeg             phm
adpcm_ima_ws            libopus                 png
adpcm_ms                librav1e                ppm
adpcm_swf               libshine                prores
adpcm_yamaha            libspeex                prores_aw
alac                    libsvtav1               prores_ks
alias_pix               libtheora               qoi
amv                     libtwolame              qtrle
anull                   libvo_amrwbenc          r10k
apng                    libvorbis               r210
aptx                    libvpx_vp8              ra_144
aptx_hd                 libvpx_vp9              rawvideo
ass                     libvvenc                roq
asv1                    libwebp                 roq_dpcm
asv2                    libwebp_anim            rpza
av1_amf                 libx264                 rv10
av1_mf                  libx264rgb              rv20
av1_nvenc               libx265                 s302m
av1_qsv                 libxavs2                sbc
av1_vaapi               libxeve                 sgi
avrp                    libxvid                 smc
avui                    ljpeg                   snow
bitpacked               magicyuv                speedhq
bmp                     mjpeg                   srt
cfhd                    mjpeg_qsv               ssa
cinepak                 mjpeg_vaapi             subrip
cljr                    mlp                     sunrast
comfortnoise            movtext                 svq1
dca                     mp2                     targa
dfpwm                   mp2fixed                text
dnxhd                   mp3_mf                  tiff
dpx                     mpeg1video              truehd
dvbsub                  mpeg2_qsv               tta
dvdsub                  mpeg2_vaapi             ttml
dvvideo                 mpeg2video              utvideo
dxv                     mpeg4                   v210
eac3                    msmpeg4v2               v308
exr                     msmpeg4v3               v408
ffv1                    msrle                   v410
ffv1_vulkan             msvideo1                vbn
ffvhuff                 nellymoser              vc2
fits                    opus                    vnull
flac                    pam                     vorbis
flashsv                 pbm                     vp8_vaapi
flashsv2                pcm_alaw                vp9_qsv
flv                     pcm_bluray              vp9_vaapi
g723_1                  pcm_dvd                 wavpack
gif                     pcm_f32be               wbmp
h261                    pcm_f32le               webvtt
h263                    pcm_f64be               wmav1
h263p                   pcm_f64le               wmav2
h264_amf                pcm_mulaw               wmv1
h264_mf                 pcm_s16be               wmv2
h264_nvenc              pcm_s16be_planar        wrapped_avframe
h264_qsv                pcm_s16le               xbm
h264_vaapi              pcm_s16le_planar        xface
h264_vulkan             pcm_s24be               xsub
hap                     pcm_s24daud             xwd
hdr                     pcm_s24le               y41p
hevc_amf                pcm_s24le_planar        yuv4
hevc_d3d12va            pcm_s32be               zlib
hevc_mf                 pcm_s32le               zmbv

Enabled hwaccels:
av1_d3d11va             hevc_dxva2              vc1_dxva2
av1_d3d11va2            hevc_nvdec              vc1_nvdec
av1_d3d12va             hevc_vaapi              vc1_vaapi
av1_dxva2               hevc_vulkan             vp8_nvdec
av1_nvdec               mjpeg_nvdec             vp8_vaapi
av1_vaapi               mjpeg_vaapi             vp9_d3d11va
av1_vulkan              mpeg1_nvdec             vp9_d3d11va2
h263_vaapi              mpeg2_d3d11va           vp9_d3d12va
h264_d3d11va            mpeg2_d3d11va2          vp9_dxva2
h264_d3d11va2           mpeg2_d3d12va           vp9_nvdec
h264_d3d12va            mpeg2_dxva2             vp9_vaapi
h264_dxva2              mpeg2_nvdec             vvc_vaapi
h264_nvdec              mpeg2_vaapi             wmv3_d3d11va
h264_vaapi              mpeg4_nvdec             wmv3_d3d11va2
h264_vulkan             mpeg4_vaapi             wmv3_d3d12va
hevc_d3d11va            vc1_d3d11va             wmv3_dxva2
hevc_d3d11va2           vc1_d3d11va2            wmv3_nvdec
hevc_d3d12va            vc1_d3d12va             wmv3_vaapi

Enabled parsers:
aac                     dvdsub                  mpegvideo
aac_latm                evc                     opus
ac3                     flac                    png
adx                     ftr                     pnm
amr                     g723_1                  qoi
av1                     g729                    rv34
avs2                    gif                     sbc
avs3                    gsm                     sipr
bmp                     h261                    tak
cavsvideo               h263                    vc1
cook                    h264                    vorbis
cri                     hdr                     vp3
dca                     hevc                    vp8
dirac                   ipu                     vp9
dnxhd                   jpeg2000                vvc
dnxuc                   jpegxl                  webp
dolby_e                 misc4                   xbm
dpx                     mjpeg                   xma
dvaudio                 mlp                     xwd
dvbsub                  mpeg4video
dvd_nav                 mpegaudio

Enabled demuxers:
aa                      idf                     pcm_mulaw
aac                     iff                     pcm_s16be
aax                     ifv                     pcm_s16le
ac3                     ilbc                    pcm_s24be
ac4                     image2                  pcm_s24le
ace                     image2_alias_pix        pcm_s32be
acm                     image2_brender_pix      pcm_s32le
act                     image2pipe              pcm_s8
adf                     image_bmp_pipe          pcm_u16be
adp                     image_cri_pipe          pcm_u16le
ads                     image_dds_pipe          pcm_u24be
adx                     image_dpx_pipe          pcm_u24le
aea                     image_exr_pipe          pcm_u32be
afc                     image_gem_pipe          pcm_u32le
aiff                    image_gif_pipe          pcm_u8
aix                     image_hdr_pipe          pcm_vidc
alp                     image_j2k_pipe          pdv
amr                     image_jpeg_pipe         pjs
amrnb                   image_jpegls_pipe       pmp
amrwb                   image_jpegxl_pipe       pp_bnk
anm                     image_pam_pipe          pva
apac                    image_pbm_pipe          pvf
apc                     image_pcx_pipe          qcp
ape                     image_pfm_pipe          qoa
apm                     image_pgm_pipe          r3d
apng                    image_pgmyuv_pipe       rawvideo
aptx                    image_pgx_pipe          rcwt
aptx_hd                 image_phm_pipe          realtext
aqtitle                 image_photocd_pipe      redspark
argo_asf                image_pictor_pipe       rka
argo_brp                image_png_pipe          rl2
argo_cvg                image_ppm_pipe          rm
asf                     image_psd_pipe          roq
asf_o                   image_qdraw_pipe        rpl
ass                     image_qoi_pipe          rsd
ast                     image_sgi_pipe          rso
au                      image_sunrast_pipe      rtp
av1                     image_svg_pipe          rtsp
avi                     image_tiff_pipe         s337m
avisynth                image_vbn_pipe          sami
avr                     image_webp_pipe         sap
avs                     image_xbm_pipe          sbc
avs2                    image_xpm_pipe          sbg
avs3                    image_xwd_pipe          scc
bethsoftvid             imf                     scd
bfi                     ingenient               sdns
bfstm                   ipmovie                 sdp
bink                    ipu                     sdr2
binka                   ircam                   sds
bintext                 iss                     sdx
bit                     iv8                     segafilm
bitpacked               ivf                     ser
bmv                     ivr                     sga
boa                     jacosub                 shorten
bonk                    jpegxl_anim             siff
brstm                   jv                      simbiosis_imx
c93                     kux                     sln
caf                     kvag                    smacker
cavsvideo               laf                     smjpeg
cdg                     lc3                     smush
cdxl                    libgme                  sol
cine                    libmodplug              sox
codec2                  libopenmpt              spdif
codec2raw               live_flv                srt
concat                  lmlm4                   stl
dash                    loas                    str
data                    lrc                     subviewer
daud                    luodat                  subviewer1
dcstr                   lvf                     sup
derf                    lxf                     svag
dfa                     m4v                     svs
dfpwm                   matroska                swf
dhav                    mca                     tak
dirac                   mcc                     tedcaptions
dnxhd                   mgsts                   thp
dsf                     microdvd                threedostr
dsicin                  mjpeg                   tiertexseq
dss                     mjpeg_2000              tmv
dts                     mlp                     truehd
dtshd                   mlv                     tta
dv                      mm                      tty
dvbsub                  mmf                     txd
dvbtxt                  mods                    ty
dvdvideo                moflex                  usm
dxa                     mov                     v210
ea                      mp3                     v210x
ea_cdata                mpc                     vag
eac3                    mpc8                    vc1
epaf                    mpegps                  vc1t
evc                     mpegts                  vividas
ffmetadata              mpegtsraw               vivo
filmstrip               mpegvideo               vmd
fits                    mpjpeg                  vobsub
flac                    mpl2                    voc
flic                    mpsub                   vpk
flv                     msf                     vplayer
fourxm                  msnwc_tcp               vqf
frm                     msp                     vvc
fsb                     mtaf                    w64
fwse                    mtv                     wady
g722                    musx                    wav
g723_1                  mv                      wavarc
g726                    mvi                     wc3
g726le                  mxf                     webm_dash_manifest
g729                    mxg                     webvtt
gdv                     nc                      wsaud
genh                    nistsphere              wsd
gif                     nsp                     wsvqa
gsm                     nsv                     wtv
gxf                     nut                     wv
h261                    nuv                     wve
h263                    obu                     xa
h264                    ogg                     xbin
hca                     oma                     xmd
hcom                    osq                     xmv
hevc                    paf                     xvag
hls                     pcm_alaw                xwma
hnm                     pcm_f32be               yop
iamf                    pcm_f32le               yuv4mpegpipe
ico                     pcm_f64be
idcin                   pcm_f64le

Enabled muxers:
a64                     h263                    pcm_s24be
ac3                     h264                    pcm_s24le
ac4                     hash                    pcm_s32be
adts                    hds                     pcm_s32le
adx                     hevc                    pcm_s8
aea                     hls                     pcm_u16be
aiff                    iamf                    pcm_u16le
alp                     ico                     pcm_u24be
amr                     ilbc                    pcm_u24le
amv                     image2                  pcm_u32be
apm                     image2pipe              pcm_u32le
apng                    ipod                    pcm_u8
aptx                    ircam                   pcm_vidc
aptx_hd                 ismv                    psp
argo_asf                ivf                     rawvideo
argo_cvg                jacosub                 rcwt
asf                     kvag                    rm
asf_stream              latm                    roq
ass                     lc3                     rso
ast                     lrc                     rtp
au                      m4v                     rtp_mpegts
avi                     matroska                rtsp
avif                    matroska_audio          sap
avm2                    md5                     sbc
avs2                    microdvd                scc
avs3                    mjpeg                   segafilm
bit                     mkvtimestamp_v2         segment
caf                     mlp                     smjpeg
cavsvideo               mmf                     smoothstreaming
chromaprint             mov                     sox
codec2                  mp2                     spdif
codec2raw               mp3                     spx
crc                     mp4                     srt
dash                    mpeg1system             stream_segment
data                    mpeg1vcd                streamhash
daud                    mpeg1video              sup
dfpwm                   mpeg2dvd                swf
dirac                   mpeg2svcd               tee
dnxhd                   mpeg2video              tg2
dts                     mpeg2vob                tgp
dv                      mpegts                  truehd
eac3                    mpjpeg                  tta
evc                     mxf                     ttml
f4v                     mxf_d10                 uncodedframecrc
ffmetadata              mxf_opatom              vc1
fifo                    null                    vc1t
filmstrip               nut                     voc
fits                    obu                     vvc
flac                    oga                     w64
flv                     ogg                     wav
framecrc                ogv                     webm
framehash               oma                     webm_chunk
framemd5                opus                    webm_dash_manifest
g722                    pcm_alaw                webp
g723_1                  pcm_f32be               webvtt
g726                    pcm_f32le               wsaud
g726le                  pcm_f64be               wtv
gif                     pcm_f64le               wv
gsm                     pcm_mulaw               yuv4mpegpipe
gxf                     pcm_s16be
h261                    pcm_s16le

Enabled protocols:
async                   http                    rtmp
bluray                  httpproxy               rtmpe
cache                   https                   rtmps
concat                  icecast                 rtmpt
concatf                 ipfs_gateway            rtmpte
crypto                  ipns_gateway            rtmpts
data                    librist                 rtp
fd                      libsrt                  srtp
ffrtmpcrypt             libssh                  subfile
ffrtmphttp              libzmq                  tcp
file                    md5                     tee
ftp                     mmsh                    tls
gopher                  mmst                    udp
gophers                 pipe                    udplite
hls                     prompeg

Enabled filters:
a3dscope                deblock                 perms
aap                     decimate                perspective
abench                  deconvolve              phase
abitscope               dedot                   photosensitivity
acompressor             deesser                 pixdesctest
acontrast               deflate                 pixelize
acopy                   deflicker               pixscope
acrossfade              deinterlace_qsv         pp
acrossover              deinterlace_vaapi       pp7
acrusher                dejudder                premultiply
acue                    delogo                  prewitt
addroi                  denoise_vaapi           prewitt_opencl
adeclick                deshake                 procamp_vaapi
adeclip                 deshake_opencl          program_opencl
adecorrelate            despill                 pseudocolor
adelay                  detelecine              psnr
adenorm                 dialoguenhance          pullup
aderivative             dilation                qp
adrawgraph              dilation_opencl         qrencode
adrc                    displace                qrencodesrc
adynamicequalizer       doubleweave             quirc
adynamicsmooth          drawbox                 random
aecho                   drawbox_vaapi           readeia608
aemphasis               drawgraph               readvitc
aeval                   drawgrid                realtime
aevalsrc                drawtext                remap
aexciter                drmeter                 remap_opencl
afade                   dynaudnorm              removegrain
afdelaysrc              earwax                  removelogo
afftdn                  ebur128                 repeatfields
afftfilt                edgedetect              replaygain
afir                    elbg                    reverse
afireqsrc               entropy                 rgbashift
afirsrc                 epx                     rgbtestsrc
aformat                 eq                      roberts
afreqshift              equalizer               roberts_opencl
afwtdn                  erosion                 rotate
agate                   erosion_opencl          rubberband
agraphmonitor           estdif                  sab
ahistogram              exposure                scale
aiir                    extractplanes           scale2ref
aintegral               extrastereo             scale_cuda
ainterleave             fade                    scale_qsv
alatency                feedback                scale_vaapi
alimiter                fftdnoiz                scale_vulkan
allpass                 fftfilt                 scdet
allrgb                  field                   scharr
allyuv                  fieldhint               scroll
aloop                   fieldmatch              segment
alphaextract            fieldorder              select
alphamerge              fillborders             selectivecolor
amerge                  find_rect               sendcmd
ametadata               firequalizer            separatefields
amix                    flanger                 setdar
amovie                  flip_vulkan             setfield
amplify                 flite                   setparams
amultiply               floodfill               setpts
anequalizer             format                  setrange
anlmdn                  fps                     setsar
anlmf                   framepack               settb
anlms                   framerate               sharpness_vaapi
anoisesrc               framestep               shear
anull                   freezedetect            showcqt
anullsink               freezeframes            showcwt
anullsrc                frei0r                  showfreqs
apad                    frei0r_src              showinfo
aperms                  fspp                    showpalette
aphasemeter             fsync                   showspatial
aphaser                 gblur                   showspectrum
aphaseshift             gblur_vulkan            showspectrumpic
apsnr                   geq                     showvolume
apsyclip                gradfun                 showwaves
apulsator               gradients               showwavespic
arealtime               graphmonitor            shuffleframes
aresample               grayworld               shufflepixels
areverse                greyedge                shuffleplanes
arls                    guided                  sidechaincompress
arnndn                  haas                    sidechaingate
asdr                    haldclut                sidedata
asegment                haldclutsrc             sierpinski
aselect                 hdcd                    signalstats
asendcmd                headphone               signature
asetnsamples            hflip                   silencedetect
asetpts                 hflip_vulkan            silenceremove
asetrate                highpass                sinc
asettb                  highshelf               sine
ashowinfo               hilbert                 siti
asidedata               histeq                  smartblur
asisdr                  histogram               smptebars
asoftclip               hqdn3d                  smptehdbars
aspectralstats          hqx                     sobel
asplit                  hstack                  sobel_opencl
ass                     hstack_qsv              sofalizer
astats                  hstack_vaapi            spectrumsynth
astreamselect           hsvhold                 speechnorm
asubboost               hsvkey                  split
asubcut                 hue                     spp
asupercut               huesaturation           sr_amf
asuperpass              hwdownload              ssim
asuperstop              hwmap                   ssim360
atadenoise              hwupload                stereo3d
atempo                  hwupload_cuda           stereotools
atilt                   hysteresis              stereowiden
atrim                   iccdetect               streamselect
avectorscope            iccgen                  subtitles
avgblur                 identity                super2xsai
avgblur_opencl          idet                    superequalizer
avgblur_vulkan          il                      surround
avsynctest              inflate                 swaprect
axcorrelate             interlace               swapuv
azmq                    interleave              tblend
backgroundkey           join                    telecine
bandpass                kerndeint               testsrc
bandreject              kirsch                  testsrc2
bass                    ladspa                  thistogram
bbox                    lagfun                  threshold
bench                   latency                 thumbnail
bilateral               lenscorrection          thumbnail_cuda
bilateral_cuda          lensfun                 tile
biquad                  libplacebo              tiltandshift
bitplanenoise           libvmaf                 tiltshelf
blackdetect             life                    tinterlace
blackframe              limitdiff               tlut2
blend                   limiter                 tmedian
blend_vulkan            loop                    tmidequalizer
blockdetect             loudnorm                tmix
blurdetect              lowpass                 tonemap
bm3d                    lowshelf                tonemap_opencl
boxblur                 lumakey                 tonemap_vaapi
boxblur_opencl          lut                     tpad
bs2b                    lut1d                   transpose
bwdif                   lut2                    transpose_opencl
bwdif_cuda              lut3d                   transpose_vaapi
bwdif_vulkan            lutrgb                  transpose_vulkan
cas                     lutyuv                  treble
ccrepack                mandelbrot              tremolo
cellauto                maskedclamp             trim
channelmap              maskedmax               unpremultiply
channelsplit            maskedmerge             unsharp
chorus                  maskedmin               unsharp_opencl
chromaber_vulkan        maskedthreshold         untile
chromahold              maskfun                 uspp
chromakey               mcdeint                 v360
chromakey_cuda          mcompand                vaguedenoiser
chromanr                median                  varblur
chromashift             mergeplanes             vectorscope
ciescope                mestimate               vflip
codecview               metadata                vflip_vulkan
color                   midequalizer            vfrdet
color_vulkan            minterpolate            vibrance
colorbalance            mix                     vibrato
colorchannelmixer       monochrome              vidstabdetect
colorchart              morpho                  vidstabtransform
colorcontrast           movie                   vif
colorcorrect            mpdecimate              vignette
colorhold               mptestsrc               virtualbass
colorize                msad                    vmafmotion
colorkey                multiply                volume
colorkey_opencl         negate                  volumedetect
colorlevels             nlmeans                 vpp_amf
colormap                nlmeans_opencl          vpp_qsv
colormatrix             nlmeans_vulkan          vstack
colorspace              nnedi                   vstack_qsv
colorspace_cuda         noformat                vstack_vaapi
colorspectrum           noise                   w3fdif
colortemperature        normalize               waveform
compand                 null                    weave
compensationdelay       nullsink                xbr
concat                  nullsrc                 xcorrelate
convolution             openclsrc               xfade
convolution_opencl      oscilloscope            xfade_opencl
convolve                overlay                 xfade_vulkan
copy                    overlay_cuda            xmedian
corr                    overlay_opencl          xpsnr
cover_rect              overlay_qsv             xstack
crop                    overlay_vaapi           xstack_qsv
cropdetect              overlay_vulkan          xstack_vaapi
crossfeed               owdenoise               yadif
crystalizer             pad                     yadif_cuda
cue                     pad_opencl              yaepblur
curves                  pad_vaapi               yuvtestsrc
datascope               pal100bars              zmq
dblur                   pal75bars               zoneplate
dcshift                 palettegen              zoompan
dctdnoiz                paletteuse              zscale
ddagrab                 pan
deband                  perlin

Enabled bsfs:
aac_adtstoasc           h264_mp4toannexb        pcm_rechunk
av1_frame_merge         h264_redundant_pps      pgs_frame_merge
av1_frame_split         hapqa_extract           prores_metadata
av1_metadata            hevc_metadata           remove_extradata
chomp                   hevc_mp4toannexb        setts
dca_core                imx_dump_header         showinfo
dovi_rpu                media100_to_mjpegb      text2movsub
dts2pts                 mjpeg2jpeg              trace_headers
dump_extradata          mjpega_dump_header      truehd_core
dv_error_marker         mov2textsub             vp9_metadata
eac3_core               mpeg2_metadata          vp9_raw_reorder
evc_frame_merge         mpeg4_unpack_bframes    vp9_superframe
extract_extradata       noise                   vp9_superframe_split
filter_units            null                    vvc_metadata
h264_metadata           opus_metadata           vvc_mp4toannexb

Enabled indevs:
dshow                   lavfi                   vfwcap
gdigrab                 libcdio

Enabled outdevs:
caca                    sdl2

git-full external libraries' versions: 

AMF v1.4.35-4-g681af0d
aom v3.11.0-186-g3990233fc0
aribb24 v1.0.3-5-g5e9be27
aribcaption 1.1.1
AviSynthPlus v3.7.3-109-g21fdc997
bs2b 3.1.0
chromaprint 1.5.1
codec2 1.2.0-103-gff00a6e2
dav1d 1.5.1
davs2 1.7-1-gb41cf11
dvdnav 6.1.1-23-g9831fe0
dvdread 6.1.3-9-gba2227b
ffnvcodec n13.0.19.0-1-gf2fb9b3
flite v2.2-55-g6c9f20d
freetype VER-2-13-3-68-gb1f4785
frei0r v2.3.3-8-g8bf0322
fribidi v1.0.16-2-gb28f43b
gsm 1.0.22
harfbuzz 10.2.0-21-gc4c8eb4f
ladspa-sdk 1.17
lame 3.100
lc3 1.1.2
lcms2 2.16
lensfun v0.3.95-1626-g5faa1e5e
libass 0.17.3-79-g1b69955
libcdio-paranoia 10.2
libgme 0.6.3
libilbc v3.0.4-346-g6adb26d4a4
libopencore-amrnb 0.1.6
libopencore-amrwb 0.1.6
libplacebo v7.349.0-30-g056b852
libsoxr 0.1.3
libssh 0.11.1
libtheora 1.1.1
libwebp v1.5.0-5-g6a22b670
oneVPL 2.14
OpenCL-Headers v2024.10.24-1-gd32c5bb
openmpt libopenmpt-0.6.22-2-gcca8bfee5
opus v1.5.2-22-g7db26934
qrencode 4.1.1
quirc 1.2
rav1e p20241231
rist 0.2.12
rubberband v1.8.1
SDL prerelease-2.29.2-502-g284727388
shaderc v2024.4-13-gab0d3ed
shine 3.1.1
snappy 1.2.1
speex Speex-1.2.1-43-gcee61a4
srt v1.5.4-13-ga6b9959
SVT-AV1 v2.3.0-137-g63d73bc1
twolame 0.4.0
uavs3d v1.1-47-g1fd0491
VAAPI 2.23.0.
vidstab v1.1.1-13-g8dff7ad
vmaf v3.0.0-101-g6280b59e
vo-amrwbenc 0.1.3
vorbis v1.3.7-10-g84c02369
vpx v1.15.0-59-g7b3fa8114
vulkan-loader v1.4.307
vvenc v1.13.0-8-g70a690e
x264 v0.164.3204
x265 4.1-92-g678678863
xavs2 1.4
xevd 0.5.0
xeve 0.5.1
xvid v1.3.7
zeromq 4.3.5
zimg release-3.0.5-173-g30f368c
zvbi v0.2.43-4-gaf8b9f7

