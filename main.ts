import{readFileSync as f,readdirSync as d,mkdirSync as m,writeFileSync as w}from"node:fs";
let T="!2b%'+,0        *******&***&*** ***             AEEA!           &)              %%\"%";
function v(P,I){
let n=P.length,S=new Int32Array(256),s=0,C=new Int32Array(64),c=0,M=new Int32Array(256),O=new Uint8Array(65536),o=0,p=0,i=0,t=0,a,b,r;
let R=e=>[O.subarray(0,o),e];
for(;;){
if(t==1e6)return R(10);
if(p<0||p>=n)return R(9);
let k=P[p],z=T.charCodeAt(k)-33;
if(k>83||z<0)return R(5);
let g=z>>4,q=z>>2&3,y=z&3;
if(p+g>=n)return R(9);
t++;
let x=p+1+g;
if(s<q)return R(2);
if(s-q+y>256)return R(3);
p=x;
switch(k){
case 0:return R(0);
case 1:S[s++]=(P[x-1]<<24)>>24;break;
case 2:S[s++]=P[x-4]|P[x-3]<<8|P[x-2]<<16|P[x-1]<<24;break;
case 3:s--;break;
case 4:S[s]=S[s-1];s++;break;
case 5:a=S[s-1];S[s-1]=S[s-2];S[s-2]=a;break;
case 6:S[s]=S[s-2];s++;break;
case 7:a=S[s-3];S[s-3]=S[s-2];S[s-2]=S[s-1];S[s-1]=a;break;
case 23:S[s-1]=-S[s-1]|0;break;
case 27:S[s-1]=~S[s-1];break;
case 48:case 49:case 50:{let j=((P[x-2]|P[x-1]<<8)<<16)>>16;if(k==48||(k==49?S[--s]==0:S[--s]!=0))p=x+j;break}
case 51:if(c==64)return R(7);C[c++]=x;p=P[x-2]|P[x-1]<<8;break;
case 52:if(!c)return R(8);p=C[--c];break;
case 64:a=S[s-1];if(a<0||a>255)return R(6);S[s-1]=M[a];break;
case 65:a=S[s-1];if(a<0||a>255)return R(6);M[a]=S[s-2];s-=2;break;
case 80:{let u=""+S[--s];if(o+u.length>65536)return R(11);for(let h=0;h<u.length;h++)O[o++]=u.charCodeAt(h);break}
case 81:if(o>65535)return R(11);O[o++]=S[--s]&255;break;
case 82:S[s++]=i<I.length?I[i++]:-1;break;
case 83:return R(S[--s]&255);
default:
b=S[s-1];a=S[s-2];s-=2;
if((k==19||k==20||k==21||k==22)&&!b)return R(4);
r=k==16?a+b|0:k==17?a-b|0:k==18?Math.imul(a,b):k==19?a==-2147483648&&b==-1?a:(a/b)|0:k==20?b==-1?0:a%b|0:k==21?(a>>>0)/(b>>>0)|0:k==22?(a>>>0)%(b>>>0)|0:k==24?a&b:k==25?a|b:k==26?a^b:k==28?a<<(b&31):k==29?a>>(b&31):k==30?a>>>(b&31):k==32?a==b?1:0:k==33?a<b?1:0:(a>>>0)<(b>>>0)?1:0;
S[s++]=r;
}
}
}
let A=process.env.MAKEFUN_INPUT_DIR||"/input",B=process.env.MAKEFUN_OUTPUT_DIR||"/output";
for(let id of d(A)){let[C,e]=v(f(`${A}/${id}/program.bin`),f(`${A}/${id}/input.bin`));m(`${B}/${id}`,{recursive:true});w(`${B}/${id}/stdout.bin`,C);w(`${B}/${id}/exit.txt`,e+"\n")}
