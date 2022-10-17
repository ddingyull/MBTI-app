

const initStateEmpty = {
  mbtiResult: '',
  page: 0,
  survey: [],
  explanation: {},
  };

export default function mbti(state = initStateEmpty, action) {
  switch (action.type) {
  case INIT:
    return {
      ...state,
      survey: action.payload.survey,
      explanation: action.payload.explanation,
    };
  }
    
  
