<template>
  <a-tabs class="mt10" type="rounded" size="medium">
    <a-tab-pane key="1" title="起一个变量名">
      <div>
        <a-card :style="{ width: 'auto' }">
          <a-space direction="vertical" size="small" fill>
            <a-typographya>
              <a-typography-title :heading="6">需求：</a-typography-title>
              <a-textarea
                placeholder="请输入你的需求"
                :max-length="{ length: 10, errorOnly: true }"
                allow-clear
                show-word-limit
              />
            </a-typographya>

            <a-typographya>
              <a-typography-title :heading="6">编程语言：</a-typography-title>
              <a-select
                :style="{ width: '320px' }"
                v-model="value"
                placeholder="请选择编程语言"
                allow-clear
                allow-search
              >
                <a-option>Java</a-option>
                <a-option>Python</a-option>
                <a-option>TypeScript</a-option>
                <a-option>Golang</a-option>
              </a-select>
            </a-typographya>

            <a-typographya>
              <a-typography-title :heading="6">变量用途：</a-typography-title>
              <a-select
                :style="{ width: '320px' }"
                v-model="value"
                placeholder="请选择变量用途"
                allow-clear
                allow-search
              >
                <a-option>Beijing</a-option>
                <a-option>Shanghai</a-option>
                <a-option>Guangzhou</a-option>
                <a-option disabled>Disabled</a-option>
              </a-select>
            </a-typographya>

            <a-button type="primary" size="small">开始起名</a-button>
          </a-space>
          <a-space direction="vertical" size="small" fill>
            <a-typographya>
              <a-typography-title :heading="6">生成结果</a-typography-title>
              <a-typography-paragraph copyable>
                Click the icon to copy this text.
              </a-typography-paragraph>
            </a-typographya>
          </a-space>
        </a-card>
      </div>
    </a-tab-pane>
    <a-tab-pane key="2" title="变量名转换">
      <a-card :style="{ width: 'auto' }">
        <div>
          <a-card :style="{ width: 'auto' }">
            <a-space direction="vertical" size="small" fill>
              <a-typographya>
                <a-typography-title :heading="6"
                  >输入变量名：</a-typography-title
                >
                <a-input
                  :style="{ width: '320px' }"
                  default-value="content"
                  placeholder="请输入一个变量名"
                  allow-clear
                />
              </a-typographya>
              <a-button type="primary" size="small">开始转换</a-button>
            </a-space>
            
            <a-space direction="vertical" size="small" fill>
              <a-typographya>
                <a-typography-title :heading="6">生成结果</a-typography-title>
                <a-typography-paragraph copyable>
                  Click the icon to copy this text.
                </a-typography-paragraph>
              </a-typographya>
            </a-space>
          </a-card>
        </div>
      </a-card>
    </a-tab-pane>
    <a-tab-pane key="3" title="变量名优化">
      <a-card :style="{ width: 'auto' }"> 施工中 </a-card>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts" setup></script>

<style scoped></style>
