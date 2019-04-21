<!-- <ayu-input v-model="inputValue" @change="changeinput" placeholder="标题" prefixIcon="search" suffixIcon="date" style="width:200px;margin-right: 5px;float: left;"></ayu-input>

<ayu-input v-model="inputValue" size="medium" @change="changeinput" placeholder="标题" prefixIcon="search" suffixIcon="date" style="width:200px;margin-right: 5px;float: left;"></ayu-input>

<ayu-input v-model="inputValue" size="small" @change="changeinput" placeholder="标题" prefixIcon="search" suffixIcon="date" style="width:200px;margin-right: 5px;float: left;"></ayu-input>

<ayu-input v-model="inputValue" size="mini" @change="changeinput" placeholder="标题" prefixIcon="search" suffixIcon="date" style="width:200px;margin-right: 5px;float: left;"></ayu-input> -->
## Input 输入框
通过鼠标或键盘输入字符
### 基础用法
::: demo
``` html
<ayu-input placeholder="请输入内容" v-model="inputValue" />
```
:::

### 禁用状态
::: demo 通过 `disabled` 属性指定是否禁用 input 组件
``` html
<ayu-input placeholder="请输入内容" v-model="inputValue" disabled />
```
:::

### 可清空
::: demo 通过 `clearable` 属性即可得到一个可清空的输入框
``` html
<ayu-input placeholder="请输入内容" v-model="inputValue" clearable />
```
:::

### 密码框
::: demo 通过 `type` 属性即可选择普通input的type属性
``` html
<ayu-input placeholder="请输入内容" v-model="inputValue" type="password" />
```
:::

### 带 icon 的输入框
::: demo 可以通过 `prefix-icon` 和 `suffix-icon` 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。
``` html
<div class="demo-input">
  属性方式：
  <ayu-input v-model="inputValue" placeholder="请输入内容" prefixIcon="search" suffixIcon="date"></ayu-input>
</div>
<div class="demo-input">
  slot方式：
  <ayu-input v-model="inputValue" placeholder="请输入内容">
    <ayu-icon slot="prefix" icon-class="search"></ayu-icon>
    <ayu-icon slot="suffix" icon-class="date"></ayu-icon>
  </ayu-input>
</div>
```
:::

### 圆角状态
::: demo 通过 `round` 属性即可为input带上圆角
``` html
<ayu-input placeholder="请输入内容" v-model="inputValue" round />
```
:::

### 文本域
::: demo 用于输入多行文本信息，通过将 `type` 属性的值指定为 textarea。
``` html
<ayu-input placeholder="请输入内容" v-model="inputValue" type="textarea" />
```
:::

### 复合型输入框
可前置或后置元素，一般为标签或按钮
::: demo 可通过 slot 来指定在 input 中前置或者后置内容。
``` html
<div class="demo-input-pend">
  <ayu-input placeholder="请输入内容" v-model="inputValue">
    <template slot="prepend">https://</template>
  </ayu-input>
</div>

<div class="demo-input-pend">
  <ayu-input placeholder="请输入内容" v-model="inputValue">
    <template slot="append">.com</template>
  </ayu-input>
</div>

<div class="demo-input-pend">
  <ayu-input placeholder="请输入内容" v-model="inputValue">
    <template slot="prepend">https://</template>
    <template slot="append">.com</template>
  </ayu-input>
</div>
```
:::

### 不同尺寸
::: demo 可通过 `size` 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。
``` html
<div class="demo-input-size">
  <ayu-input v-model="inputValue" size="large" placeholder="标题" suffixIcon="date"></ayu-input>
  <ayu-input v-model="inputValue" placeholder="标题" suffixIcon="date"></ayu-input>
  <ayu-input v-model="inputValue" size="small" placeholder="标题" suffixIcon="date"></ayu-input>
  <ayu-input v-model="inputValue" size="mini" placeholder="标题" suffixIcon="date"></ayu-input>
</div>
```
:::
<script>
export default {
  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    changeinput() {
      console.log('this is change');
    }
  }
}
</script>
<style scoped lang="scss">
  .ayu-input {
    width: 180px;
  }
  .demo-input {
    display: inline-flex;
    align-items: center;
    margin-right: 15px;
  }
  .demo-input-pend {
    .ayu-input {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .demo-input-size {
    display: inline-flex;
    justify-content: space-between;
    .ayu-input {
      margin-right: 10px;
    }
  }
</style>