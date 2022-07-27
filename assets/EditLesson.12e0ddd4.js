import{L as c}from"./LessonDataService.9ed690ac.js";import{_ as f,o as V,c as v,a as r,t as i,b as s,w as o,F as _,d as p}from"./index.52db07d9.js";import{V as g,a as m}from"./VTextField.7ca6e93f.js";import{V as I,a as n,b as h}from"./VRow.e80db228.js";const L={name:"edit-lesson",props:{tutorialId:String,lessonId:String},data(){return{lesson:Object,message:"Enter data and click save"}},methods:{retrieveLesson(){c.getLesson(this.tutorialId,this.lessonId).then(t=>{this.lesson=t.data}).catch(t=>{this.message=t.response.data.message})},saveLesson(){var t={title:this.lesson.title,description:this.lesson.description,tutorialId:this.lesson.tutorialId};c.updateLesson(this.lesson.tutorialId,this.lesson.id,t).then(e=>{this.lesson.id=e.data.id,this.$router.push({name:"view",params:{id:this.lesson.tutorialId}})}).catch(e=>{this.message=e.response.data.message})},cancel(){this.$router.push({name:"view",params:{id:this.lesson.tutorialId}})}},mounted(){this.retrieveLesson()}},x=r("h1",null,"Edit Lesson",-1),b=p("Save"),k=p("Cancel");function w(t,e,d,C,l,u){return V(),v(_,null,[x,r("h4",null,i(l.message),1),r("h4",null,"Tutorial : "+i(d.tutorialId)+" Lesson : "+i(d.lessonId),1),s(g,null,{default:o(()=>[s(m,{label:"Title",modelValue:l.lesson.title,"onUpdate:modelValue":e[0]||(e[0]=a=>l.lesson.title=a)},null,8,["modelValue"]),s(m,{label:"Description",modelValue:l.lesson.description,"onUpdate:modelValue":e[1]||(e[1]=a=>l.lesson.description=a)},null,8,["modelValue"]),s(I,{justify:"center"},{default:o(()=>[s(n,{col:"2"}),s(n,{col:"2"},{default:o(()=>[s(h,{color:"success",onClick:e[2]||(e[2]=a=>u.saveLesson())},{default:o(()=>[b]),_:1})]),_:1}),s(n,{col:"2"},{default:o(()=>[s(h,{color:"info",onClick:e[3]||(e[3]=a=>u.cancel())},{default:o(()=>[k]),_:1})]),_:1}),s(n,{col:"2"})]),_:1})]),_:1})],64)}var T=f(L,[["render",w]]);export{T as default};
