const config = {
  OPENAI_API_KEY: '50a554d2-db56-4e0e-9c5a-dfb1c2962cc6',
  LLM_MODEL: 'ep-20250206203431-bql9h',
  LLM_API_URL: 'https://ark.cn-beijing.volces.com/api/v3/chat/completions',
  ASR_WEBSOCKET_URL: 'ws://wsvoicechat.ustc-course.com:8000/api/transcribe_streaming_wav',
  TTS_API_URL: 'https://api.siliconflow.cn/v1/audio/speech',
  SILICONFLOW_API_KEY: 'sk-vkgmcrkvldamhenfivsukhxkdlceiyonzhcnntnjjqfqsnkd',
  LISTEN_PORT: 8848,
  LISTEN_HOST: '0.0.0.0',
  SYSTEM_PROMPT: 'You are a helpful AI assistant.',
  CANCEL_PLAYBACK_TIME_THRESHOLD: 3000,
};

module.exports = config;
