//For new StoreKey
//keytool -genkey -v -keystore debug.keystore -alias androiddebugkey -storepass android -keypass android -keyalg RSA -validity 10000
// "react-native-fbsdk-next": "^10.1.0",
// specify the path with it
// keytool -list -v -keystore ~/somefolder/mystore.keystore

// When they select the + sign to add a question, it will be a scrolling list
  // to select a question and then at the bottom it will be a "add your own options"
  // where they can add their own.
  export const questionSuggestions = [
    {
      id: 1,
      question:
        'Do you like to travel or more of a homebody? If you do, what’s the most [exotic/fun/fascinating/remote] place you’ve been?',
    },
    {
      id: 2,
      question:
        'Are you an animal person? Do you have any pets? What’s your stance on zoos?',
    },
    {
      id: 3,
      question:
        'Are you a foodie, or do hot pockets and ramen noodles suit you just fine?',
    },
    {
      id: 4,
      question: 'As a child, what did you want to be when you grew up?',
    },
    {
      id: 5,
      question: 'What’s the ideal number of pillows on one bed?',
    },
    {
      id: 6,
      question: 'Are you reading any good books?',
    },
    {
      id: 7,
      question: 'Are you an early bird or a night owl?',
    },
    {
      id: 8,
      question: 'Who/What is your favorite YouTuber/Youtube channel?',
    },
    {
      id: 9,
      question: 'Biggest Pet Peeve?',
    },
    {
      id: 10,
      question: 'Something you could talk about endlessly?',
    },
    {
      id: 11,
      question: 'What’s one thing your mom doesn’t know about you?',
    },
    {
      id: 12,
      question:
        'If you could wake up tomorrow having gained any one quality or ability, what would it be?',
    },
    {
      id: 12,
      button: 'Add Your Own',
    },
  ];

  export const iceBreakerQList=[
    {
      id: 1,
      question: '',
      answer: '',
      placeholder: 'What ice breaker question would you like to answer',
    },
    {
      id: 2,
      question: '',
      answer: '',
      placeholder: 'What ice breaker question would you like to answer',
    },
    {
      id: 3,
      question: '',
      answer: '',
      placeholder: 'What ice breaker question would you like to answer',
    },
  ]

export const sectorsList = [
  {value: 'Islam', label: 'Islam'},
  {value: 'Shia', label: 'Shia', parent: 'Islam'},
  {value: 'Sunni', label: 'Sunni', parent: 'Islam'},

  {value: 'Christianity', label: 'Christianity'},
  {value: 'Catholic', label: 'Catholic', parent: 'Christianity'},
  {value: 'Protestant', label: 'Protestant', parent: 'Christianity'},
  {value: 'Baptist', label: 'Baptist', parent: 'Christianity'},
  {
    value: 'Latter-Day Saints',
    label: 'Latter-Day Saints',
    parent: 'Christianity',
  },
  {value: 'Lutheran', label: 'Lutheran', parent: 'Christianity'},
  {
    value: 'Non-Denimonational',
    label: 'Non-Denimonational',
    parent: 'Christianity',
  },
];

export const religiousitySuggList=[
    {value: 'Heavily Practicing', label: 'Heavily Practicing'},
    {value: 'Somewhat Practicing,ticing', label: 'Somewhat Practicing,ticing'},
    {value: 'Not Practicing', label: 'Not Practicing'},
  ]
export const religionSuggList=[
    {value: 'Islam', label: 'Islam'},
    {value: 'Christianity', label: 'Christianity'},
    {value: 'Judaism', label: 'Judaism'},
    {value: 'Hinduism', label: 'Hinduism'},
    {value: 'Athiest', label: 'Athiest'},
    {value: 'Agnostic', label: 'Agnostic'},
  ]
export const empSuggList=[
    {value: 'None', label: 'None'},
    {value: 'Currently Employed', label: 'Currently Employed'},
    {value: 'Retired', label: 'Retired'},
    {value: 'Student', label: 'Student'},
    {value: 'Job Searching', label: 'Job Searching'},
  ]
export const imageTemplate={
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
    image6: '',
    temp1: '',
    temp2: '',
    temp3: '',
    temp4: '',
    temp5: '',
    temp6: '',
  }

export const reactionData = ['😀', '😂', '😘', '❤️', '😪', '🤘🏼', '😁', '😅'];
export const emojjisData = [
  {
    char: '😀',
  },
  {
    char: '😃',
  },
  {
    char: '😄',
  },
  {
    char: '😁',
  },
  {
    char: '😆',
  },
  {
    char: '😅',
  },
  {
    char: '🤣',
  },
  {
    char: '😂',
  },
  {
    char: '🙂',
  },
  {
    char: '🙃',
  },
  {
    char: '😉',
  },
  {
    char: '😊',
  },
  {
    char: '😇',
  },
  {
    char: '🥰',
  },
  {
    char: '😍',
  },
  {
    char: '🤩',
  },
  {
    char: '😘',
  },
  {
    char: '😗',
  },

  {
    char: '😚',
  },
  {
    char: '😙',
  },
  {
    char: '🥲',
  },
  {
    char: '😋',
  },
  {
    char: '😛',
  },
  {
    char: '😜',
  },
  {
    char: '🤪',
  },
  {
    char: '😝',
  },
  {
    char: '🤑',
  },
  {
    char: '🤗',
  },
  {
    char: '🤭',
  },
  {
    char: '🤫',
  },
  {
    char: '🤔',
  },
  {
    char: '🤐',
  },
  {
    char: '🤨',
  },
  {
    char: '😐',
  },
  {
    char: '😑',
  },
  {
    char: '😶',
  },

  {
    char: '😏',
  },
  {
    char: '😒',
  },
  {
    char: '🙄',
  },
  {
    char: '😬',
  },
  {
    char: '😮‍💨',
  },
  {
    char: '🤥',
  },
  {
    char: '😌',
  },
  {
    char: '😔',
  },
  {
    char: '😪',
  },
  {
    char: '🤤',
  },
  {
    char: '😴',
  },
  {
    char: '😷',
  },
  {
    char: '🤒',
  },
  {
    char: '🤕',
  },
  {
    char: '🤢',
  },
  {
    char: '🤮',
  },
  {
    char: '🤧',
  },
  {
    char: '🥵',
  },
  {
    char: '🥶',
  },
  {
    char: '🥴',
  },
  {
    char: '😵',
  },
  {
    char: '😵‍💫',
  },
  {
    char: '🤯',
  },
  {
    char: '🤠',
  },
  {
    char: '🥳',
  },
  {
    char: '🥸',
  },
  {
    char: '😎',
  },
  {
    char: '🤓',
  },
  {
    char: '🧐',
  },
  {
    char: '😕',
  },
  {
    char: '😟',
  },
  {
    char: '🙁',
  },
  {
    char: '☹️',
  },

  {
    char: '😮',
  },
  {
    char: '😯',
  },
  {
    char: '😲',
  },
  {
    char: '😳',
  },
  {
    char: '🥺',
  },
  {
    char: '😦',
  },
  {
    char: '😧',
  },
  {
    char: '😨',
  },
  {
    char: '😰',
  },
  {
    char: '😥',
  },
  {
    char: '😢',
  },
  {
    char: '😭',
  },
  {
    char: '😱',
  },
  {
    char: '😖',
  },
  {
    char: '😣',
  },
  {
    char: '😞',
  },
  {
    char: '😓',
  },
  {
    char: '😩',
  },
  {
    char: '😫',
  },
  {
    char: '🥱',
  },
  {
    char: '😤',
  },
  {
    char: '😡',
  },
  {
    char: '😠',
  },
  {
    char: '🤬',
  },
  {
    char: '😈',
  },
  {
    char: '👿',
  },
  {
    char: '💀',
  },
  {
    char: '☠️',
  },

  {
    char: '💩',
  },

  {
    char: '👹',
  },
  {
    char: '👺',
  },
  {
    char: '👻',
  },
  {
    char: '👽',
  },
  {
    char: '👾',
  },
  {
    char: '🤖',
  },
  {
    char: '😺',
  },
  {
    char: '😸',
  },
  {
    char: '😹',
  },
  {
    char: '😻',
  },
  {
    char: '😼',
  },
  {
    char: '😽',
  },
  {
    char: '🙀',
  },
  {
    char: '😿',
  },
  {
    char: '😾',
  },
  {
    char: '🙈',
  },
  {
    char: '🙉',
  },
  {
    char: '🙊',
  },
  {
    char: '💋',
  },
  {
    char: '💌',
  },
  {
    char: '💘',
  },
  {
    char: '💝',
  },
  {
    char: '💖',
  },
  {
    char: '💗',
  },
  {
    char: '💓',
  },
  {
    char: '💞',
  },
  {
    char: '💕',
  },
  {
    char: '💟',
  },
  {
    char: '❣️',
  },
  {
    char: '❣',
  },
  {
    char: '💔',
  },
  {
    char: '❤️‍🔥',
  },
  {
    char: '❤‍🔥',
  },
  {
    char: '❤️‍🩹',
  },
  {
    char: '❤‍🩹',
  },
  {
    char: '❤️',
  },
  {
    char: '❤',
  },
  {
    char: '🧡',
  },
  {
    char: '💛',
  },
  {
    char: '💚',
  },
  {
    char: '💙',
  },
  {
    char: '💜',
  },
  {
    char: '🤎',
  },
  {
    char: '🖤',
  },
  {
    char: '🤍',
  },
  {
    char: '💯',
  },
  {
    char: '💢',
  },
  {
    char: '💥',
  },
  {
    char: '💫',
  },
  {
    char: '💦',
  },
  {
    char: '💨',
  },
  {
    char: '🕳️',
  },
  {
    char: '🕳',
  },
  {
    char: '💣',
  },
  {
    char: '💬',
  },
  {
    char: '👁️‍🗨️',
  },
  {
    char: '👁‍🗨️',
  },
  {
    char: '👁️‍🗨',
  },
  {
    char: '👁‍🗨',
  },
  {
    char: '🗨️',
  },
  {
    char: '🗨',
  },
  {
    char: '🗯️',
  },
  {
    char: '🗯',
  },
  {
    char: '💭',
  },
  {
    char: '💤',
  },
  {
    char: '👋',
  },
  {
    char: '👋🏻',
  },
  {
    char: '👋🏼',
  },
  {
    char: '👋🏽',
  },
  {
    char: '👋🏾',
  },
  {
    char: '👋🏿',
  },
  {
    char: '🤚',
  },
  {
    char: '🤚🏻',
  },
  {
    char: '🤚🏼',
  },
  {
    char: '🤚🏽',
  },
  {
    char: '🤚🏾',
  },
  {
    char: '🤚🏿',
  },
  {
    char: '🖐️',
  },
  {
    char: '🖐',
  },
  {
    char: '🖐🏻',
  },
  {
    char: '🖐🏼',
  },
  {
    char: '🖐🏽',
  },
  {
    char: '🖐🏾',
  },
  {
    char: '🖐🏿',
  },
  {
    char: '✋',
  },
  {
    char: '✋🏻',
  },
  {
    char: '✋🏼',
  },
  {
    char: '✋🏽',
  },
  {
    char: '✋🏾',
  },
  {
    char: '✋🏿',
  },
  {
    char: '🖖',
  },
  {
    char: '🖖🏻',
  },
  {
    char: '🖖🏼',
  },
  {
    char: '🖖🏽',
  },
  {
    char: '🖖🏾',
  },
  {
    char: '🖖🏿',
  },
  {
    char: '👌',
  },
  {
    char: '👌🏻',
  },
  {
    char: '👌🏼',
  },
  {
    char: '👌🏽',
  },
  {
    char: '👌🏾',
  },
  {
    char: '👌🏿',
  },
  {
    char: '🤌',
  },
  {
    char: '🤌🏻',
  },
  {
    char: '🤌🏼',
  },
  {
    char: '🤌🏽',
  },
  {
    char: '🤌🏾',
  },
  {
    char: '🤌🏿',
  },
  {
    char: '🤏',
  },
  {
    char: '🤏🏻',
  },
  {
    char: '🤏🏼',
  },
  {
    char: '🤏🏽',
  },
  {
    char: '🤏🏾',
  },
  {
    char: '🤏🏿',
  },
  {
    char: '✌️',
  },
  {
    char: '✌',
  },
  {
    char: '✌🏻',
  },
  {
    char: '✌🏼',
  },
  {
    char: '✌🏽',
  },
  {
    char: '✌🏾',
  },
  {
    char: '✌🏿',
  },
  {
    char: '🤞',
  },
  {
    char: '🤞🏻',
  },
  {
    char: '🤞🏼',
  },
  {
    char: '🤞🏽',
  },
  {
    char: '🤞🏾',
  },
  {
    char: '🤞🏿',
  },
  {
    char: '🤟',
  },
  {
    char: '🤟🏻',
  },
  {
    char: '🤟🏼',
  },
  {
    char: '🤟🏽',
  },
  {
    char: '🤟🏾',
  },
  {
    char: '🤟🏿',
  },
  {
    char: '🤘',
  },
  {
    char: '🤘🏻',
  },
  {
    char: '🤘🏼',
  },
  {
    char: '🤘🏽',
  },
  {
    char: '🤘🏾',
  },
  {
    char: '🤘🏿',
  },
  {
    char: '🤙',
  },
  {
    char: '🤙🏻',
  },
  {
    char: '🤙🏼',
  },
  {
    char: '🤙🏽',
  },
  {
    char: '🤙🏾',
  },
  {
    char: '🤙🏿',
  },
  {
    char: '👈',
  },
  {
    char: '👈🏻',
  },
  {
    char: '👈🏼',
  },
  {
    char: '👈🏽',
  },
  {
    char: '👈🏾',
  },
  {
    char: '👈🏿',
  },
  {
    char: '👉',
  },
  {
    char: '👉🏻',
  },
  {
    char: '👉🏼',
  },
  {
    char: '👉🏽',
  },
  {
    char: '👉🏾',
  },
  {
    char: '👉🏿',
  },
  {
    char: '👆',
  },
  {
    char: '👆🏻',
  },
  {
    char: '👆🏼',
  },
  {
    char: '👆🏽',
  },
  {
    char: '👆🏾',
  },
  {
    char: '👆🏿',
  },
  {
    char: '🖕',
  },
  {
    char: '🖕🏻',
  },
  {
    char: '🖕🏼',
  },
  {
    char: '🖕🏽',
  },
  {
    char: '🖕🏾',
  },
  {
    char: '🖕🏿',
  },
  {
    char: '👇',
  },
  {
    char: '👇🏻',
  },
  {
    char: '👇🏼',
  },
  {
    char: '👇🏽',
  },
  {
    char: '👇🏾',
  },
  {
    char: '👇🏿',
  },
  {
    char: '☝️',
  },
  {
    char: '☝',
  },
  {
    char: '☝🏻',
  },
  {
    char: '☝🏼',
  },
  {
    char: '☝🏽',
  },
  {
    char: '☝🏾',
  },
  {
    char: '☝🏿',
  },
  {
    char: '👍',
  },
  {
    char: '👍🏻',
  },
  {
    char: '👍🏼',
  },
  {
    char: '👍🏽',
  },
  {
    char: '👍🏾',
  },
  {
    char: '👍🏿',
  },
  {
    char: '👎',
  },
  {
    char: '👎🏻',
  },
  {
    char: '👎🏼',
  },
  {
    char: '👎🏽',
  },
  {
    char: '👎🏾',
  },
  {
    char: '👎🏿',
  },
  {
    char: '✊',
  },
  {
    char: '✊🏻',
  },
  {
    char: '✊🏼',
  },
  {
    char: '✊🏽',
  },
  {
    char: '✊🏾',
  },
  {
    char: '✊🏿',
  },
  {
    char: '👊',
  },
  {
    char: '👊🏻',
  },
  {
    char: '👊🏼',
  },
  {
    char: '👊🏽',
  },
  {
    char: '👊🏾',
  },
  {
    char: '👊🏿',
  },
  {
    char: '🤛',
  },
  {
    char: '🤛🏻',
  },
  {
    char: '🤛🏼',
  },
  {
    char: '🤛🏽',
  },
  {
    char: '🤛🏾',
  },
  {
    char: '🤛🏿',
  },
  {
    char: '🤜',
  },
  {
    char: '🤜🏻',
  },
  {
    char: '🤜🏼',
  },
  {
    char: '🤜🏽',
  },
  {
    char: '🤜🏾',
  },
  {
    char: '🤜🏿',
  },
  {
    char: '👏',
  },
  {
    char: '👏🏻',
  },
  {
    char: '👏🏼',
  },
  {
    char: '👏🏽',
  },
  {
    char: '👏🏾',
  },
  {
    char: '👏🏿',
  },
  {
    char: '🙌',
  },
  {
    char: '🙌🏻',
  },
  {
    char: '🙌🏼',
  },
  {
    char: '🙌🏽',
  },
  {
    char: '🙌🏾',
  },
  {
    char: '🙌🏿',
  },
  {
    char: '👐',
  },
  {
    char: '👐🏻',
  },
  {
    char: '👐🏼',
  },
  {
    char: '👐🏽',
  },
  {
    char: '👐🏾',
  },
  {
    char: '👐🏿',
  },
  {
    char: '🤲',
  },
  {
    char: '🤲🏻',
  },
  {
    char: '🤲🏼',
  },
  {
    char: '🤲🏽',
  },
  {
    char: '🤲🏾',
  },
  {
    char: '🤲🏿',
  },
  {
    char: '🤝',
  },
  {
    char: '🙏',
  },
  {
    char: '🙏🏻',
  },
  {
    char: '🙏🏼',
  },
  {
    char: '🙏🏽',
  },
  {
    char: '🙏🏾',
  },
  {
    char: '🙏🏿',
  },
  {
    char: '✍️',
  },
  {
    char: '✍',
  },
  {
    char: '✍🏻',
  },
  {
    char: '✍🏼',
  },
  {
    char: '✍🏽',
  },
  {
    char: '✍🏾',
  },
  {
    char: '✍🏿',
  },
  {
    char: '💅',
  },
  {
    char: '💅🏻',
  },
  {
    char: '💅🏼',
  },
  {
    char: '💅🏽',
  },
  {
    char: '💅🏾',
  },
  {
    char: '💅🏿',
  },
  {
    char: '🤳',
  },
  {
    char: '🤳🏻',
  },
  {
    char: '🤳🏼',
  },
  {
    char: '🤳🏽',
  },
  {
    char: '🤳🏾',
  },
  {
    char: '🤳🏿',
  },
  {
    char: '💪',
  },
  {
    char: '💪🏻',
  },
  {
    char: '💪🏼',
  },
  {
    char: '💪🏽',
  },
  {
    char: '💪🏾',
  },
  {
    char: '💪🏿',
  },
  {
    char: '🦾',
  },
  {
    char: '🦿',
  },
  {
    char: '🦵',
  },
  {
    char: '🦵🏻',
  },
  {
    char: '🦵🏼',
  },
  {
    char: '🦵🏽',
  },
  {
    char: '🦵🏾',
  },
  {
    char: '🦵🏿',
  },
  {
    char: '🦶',
  },
  {
    char: '🦶🏻',
  },
  {
    char: '🦶🏼',
  },
  {
    char: '🦶🏽',
  },
  {
    char: '🦶🏾',
  },
  {
    char: '🦶🏿',
  },
  {
    char: '👂',
  },
  {
    char: '👂🏻',
  },
  {
    char: '👂🏼',
  },
  {
    char: '👂🏽',
  },
  {
    char: '👂🏾',
  },
  {
    char: '👂🏿',
  },
  {
    char: '🦻',
  },
  {
    char: '🦻🏻',
  },
  {
    char: '🦻🏼',
  },
  {
    char: '🦻🏽',
  },
  {
    char: '🦻🏾',
  },
  {
    char: '🦻🏿',
  },
  {
    char: '👃',
  },
  {
    char: '👃🏻',
  },
  {
    char: '👃🏼',
  },
  {
    char: '👃🏽',
  },
  {
    char: '👃🏾',
  },
  {
    char: '👃🏿',
  },
  {
    char: '🧠',
  },
  {
    char: '🫀',
  },
  {
    char: '🫁',
  },
  {
    char: '🦷',
  },
  {
    char: '🦴',
  },
  {
    char: '👀',
  },
  {
    char: '👁️',
  },
  {
    char: '👁',
  },
  {
    char: '👅',
  },
  {
    char: '👄',
  },
  {
    char: '👶',
  },
  {
    char: '👶🏻',
  },
  {
    char: '👶🏼',
  },
  {
    char: '👶🏽',
  },
  {
    char: '👶🏾',
  },
  {
    char: '👶🏿',
  },
  {
    char: '🧒',
  },
  {
    char: '🧒🏻',
  },
  {
    char: '🧒🏼',
  },
  {
    char: '🧒🏽',
  },
  {
    char: '🧒🏾',
  },
  {
    char: '🧒🏿',
  },
  {
    char: '👦',
  },
  {
    char: '👦🏻',
  },
  {
    char: '👦🏼',
  },
  {
    char: '👦🏽',
  },
  {
    char: '👦🏾',
  },
  {
    char: '👦🏿',
  },
  {
    char: '👧',
  },
  {
    char: '👧🏻',
  },
  {
    char: '👧🏼',
  },
  {
    char: '👧🏽',
  },
  {
    char: '👧🏾',
  },
  {
    char: '👧🏿',
  },
  {
    char: '🧑',
  },
  {
    char: '🧑🏻',
  },
  {
    char: '🧑🏼',
  },
  {
    char: '🧑🏽',
  },
  {
    char: '🧑🏾',
  },
  {
    char: '🧑🏿',
  },
  {
    char: '👱',
  },
  {
    char: '👱🏻',
  },
  {
    char: '👱🏼',
  },
  {
    char: '👱🏽',
  },
  {
    char: '👱🏾',
  },
  {
    char: '👱🏿',
  },
  {
    char: '👨',
  },
  {
    char: '👨🏻',
  },
  {
    char: '👨🏼',
  },
  {
    char: '👨🏽',
  },
  {
    char: '👨🏾',
  },
  {
    char: '👨🏿',
  },
  {
    char: '🧔',
  },
  {
    char: '🧔🏻',
  },
  {
    char: '🧔🏼',
  },
  {
    char: '🧔🏽',
  },
  {
    char: '🧔🏾',
  },
  {
    char: '🧔🏿',
  },
  {
    char: '🧔‍♂️',
  },
  {
    char: '🧔‍♂',
  },
  {
    char: '🧔🏻‍♂️',
  },
  {
    char: '🧔🏻‍♂',
  },
  {
    char: '🧔🏼‍♂️',
  },
  {
    char: '🧔🏼‍♂',
  },
  {
    char: '🧔🏽‍♂️',
  },
  {
    char: '🧔🏽‍♂',
  },
  {
    char: '🧔🏾‍♂️',
  },
  {
    char: '🧔🏾‍♂',
  },
  {
    char: '🧔🏿‍♂️',
  },
  {
    char: '🧔🏿‍♂',
  },
  {
    char: '🧔‍♀️',
  },
  {
    char: '🧔‍♀',
  },
  {
    char: '🧔🏻‍♀️',
  },
  {
    char: '🧔🏻‍',
  },
  {
    char: '🧔🏼‍',
  },
  {
    char: '🧔🏼‍',
  },
  {
    char: '🧔🏽‍',
  },
  {
    char: '🧔🏽‍',
  },
  {
    char: '🧔🏾‍',
  },
  {
    char: '🧔🏾‍',
  },
  {
    char: '🧔🏿‍',
  },
  {
    char: '🧔🏿‍',
  },
  {
    char: '👨‍🦰',
  },
  {
    char: '👨🏻‍🦰',
  },
  {
    char: '👨🏼‍🦰',
  },
  {
    char: '👨🏽‍🦰',
  },
  {
    char: '👨🏾‍🦰',
  },
  {
    char: '👨🏿‍🦰',
  },
  {
    char: '👨‍🦱',
  },
  {
    char: '👨🏻‍🦱',
  },
  {
    char: '👨🏼‍🦱',
  },
  {
    char: '👨🏽‍🦱',
  },
  {
    char: '👨🏾‍🦱',
  },
  {
    char: '👨🏿‍🦱',
  },
  {
    char: '👨‍🦳',
  },
  {
    char: '👨🏻‍🦳',
  },
  {
    char: '👨🏼‍🦳',
  },
  {
    char: '👨🏽‍🦳',
  },
  {
    char: '👨🏾‍🦳',
  },
  {
    char: '👨🏿‍🦳',
  },
  {
    char: '👨‍🦲',
  },
  {
    char: '👨🏻‍🦲',
  },
  {
    char: '👨🏼‍🦲',
  },
  {
    char: '👨🏽‍🦲',
  },
  {
    char: '👨🏾‍🦲',
  },
  {
    char: '👨🏿‍🦲',
  },
  {
    char: '👩',
  },
  {
    char: '👩🏻',
  },
  {
    char: '👩🏼',
  },
  {
    char: '👩🏽',
  },
  {
    char: '👩🏾',
  },
  {
    char: '👩🏿',
  },
  {
    char: '👩‍🦰',
  },
  {
    char: '👩🏻‍🦰',
  },
  {
    char: '👩🏼‍🦰',
  },
  {
    char: '👩🏽‍🦰',
  },
  {
    char: '👩🏾‍🦰',
  },
  {
    char: '👩🏿‍🦰',
  },
  {
    char: '🧑‍🦰',
  },
  {
    char: '🧑🏻‍🦰',
  },
  {
    char: '🧑🏼‍🦰',
  },
  {
    char: '🧑🏽‍🦰',
  },
  {
    char: '🧑🏾‍🦰',
  },
  {
    char: '🧑🏿‍🦰',
  },
  {
    char: '👩‍🦱',
  },
  {
    char: '👩🏻‍🦱',
  },
  {
    char: '👩🏼‍🦱',
  },
  {
    char: '👩🏽‍🦱',
  },
  {
    char: '👩🏾‍🦱',
  },
  {
    char: '👩🏿‍🦱',
  },
  {
    char: '🧑‍',
  },
  {
    char: '🧑🏻‍',
  },
  {
    char: '🧑🏼‍',
  },
  {
    char: '🧑🏽‍',
  },
  {
    char: '🧑🏾‍',
  },
  {
    char: '🧑🏿‍',
  },
  {
    char: '👩‍🦳',
  },
  {
    char: '👩🏻‍🦳',
  },
  {
    char: '👩🏼‍🦳',
  },
  {
    char: '👩🏽‍🦳',
  },
  {
    char: '👩🏾‍🦳',
  },
  {
    char: '👩🏿‍🦳',
  },
  {
    char: '🧑‍🦳',
  },
  {
    char: '🧑🏻‍🦳',
  },
  {
    char: '🧑🏼‍🦳',
  },
  {
    char: '🧑🏽‍🦳',
  },
  {
    char: '🧑🏾‍🦳',
  },
  {
    char: '🧑🏿‍🦳',
  },
  {
    char: '👩‍🦲',
  },
  {
    char: '👩🏻‍🦲',
  },
  {
    char: '👩🏼‍🦲',
  },
  {
    char: '👩🏽‍🦲',
  },
  {
    char: '👩🏾‍🦲',
  },
  {
    char: '👩🏿‍🦲',
  },
  {
    char: '🧑‍🦲',
  },
  {
    char: '🧑🏻‍🦲',
  },
  {
    char: '🧑🏼‍🦲',
  },
  {
    char: '🧑🏽‍🦲',
  },
  {
    char: '🧑🏾‍🦲',
  },
  {
    char: '🧑🏿‍🦲',
  },
  {
    char: '👱‍♀️',
  },
  {
    char: '👱‍♀',
  },
  {
    char: '👱🏻‍♀️',
  },
  {
    char: '👱🏻‍♀',
  },
  {
    char: '👱🏼‍♀️',
  },
  {
    char: '👱🏼‍♀',
  },
  {
    char: '👱🏽‍♀️',
  },
  {
    char: '👱🏽‍♀',
  },
  {
    char: '👱🏾‍♀️',
  },
  {
    char: '👱🏾‍♀',
  },
  {
    char: '👱🏿‍♀️',
  },
  {
    char: '👱🏿‍♀',
  },
  {
    char: '👱‍♂️',
  },
  {
    char: '👱‍♂',
  },
  {
    char: '👱🏻‍♂️',
  },
  {
    char: '👱🏻‍♂',
  },
  {
    char: '👱🏼‍♂️',
  },
  {
    char: '👱🏼‍♂',
  },
  {
    char: '👱🏽‍♂️',
  },
  {
    char: '👱🏽‍♂',
  },
  {
    char: '👱🏾‍♂️',
  },
  {
    char: '👱🏾‍♂',
  },
  {
    char: '👱🏿‍♂️',
  },
  {
    char: '👱🏿‍♂',
  },
  {
    char: '🧓',
  },
  {
    char: '🧓🏻',
  },
  {
    char: '🧓🏼',
  },
  {
    char: '🧓🏽',
  },
  {
    char: '🧓🏾',
  },
  {
    char: '🧓🏿',
  },
  {
    char: '👴',
  },
  {
    char: '👴🏻',
  },
  {
    char: '👴🏼',
  },
  {
    char: '👴🏽',
  },
  {
    char: '👴🏾',
  },
  {
    char: '👴🏿',
  },
  {
    char: '👵',
  },
  {
    char: '👵🏻',
  },
  {
    char: '👵🏼',
  },
  {
    char: '👵🏽',
  },
  {
    char: '👵🏾',
  },
  {
    char: '👵🏿',
  },
  {
    char: '🙍',
  },
  {
    char: '🙍🏻',
  },
  {
    char: '🙍🏼',
  },
  {
    char: '🙍🏽',
  },
  {
    char: '🙍🏾',
  },
  {
    char: '🙍🏿',
  },
  {
    char: '🙍‍♂️',
  },
  {
    char: '🙍‍♂',
  },
  {
    char: '🙍🏻‍♂️',
  },
  {
    char: '🙍🏻‍♂',
  },
  {
    char: '🙍🏼‍♂️',
  },
  {
    char: '🙍🏼‍♂',
  },
  {
    char: '🙍🏽‍♂️',
  },
  {
    char: '🙍🏽‍♂',
  },
  {
    char: '🙍🏾‍♂️',
  },
  {
    char: '🙍🏾‍♂',
  },
  {
    char: '🙍🏿‍♂️',
  },
  {
    char: '🙍🏿‍♂',
  },
  {
    char: '🙍‍♀️',
  },
  {
    char: '🙍‍♀',
  },
  {
    char: '🙍🏻‍♀️',
  },
  {
    char: '🙍🏻‍♀',
  },
  {
    char: '🙍🏼‍♀️',
  },
  {
    char: '🙍🏼‍♀',
  },
  {
    char: '🙍🏽‍♀️',
  },
  {
    char: '🙍🏽‍♀',
  },
  {
    char: '🙍🏾‍♀️',
  },
  {
    char: '🙍🏾‍♀',
  },
  {
    char: '🙍🏿‍♀️',
  },
  {
    char: '🙍🏿‍♀',
  },
  {
    char: '🙎',
  },
  {
    char: '🙎🏻',
  },
  {
    char: '🙎🏼',
  },
  {
    char: '🙎🏽',
  },
  {
    char: '🙎🏾',
  },
  {
    char: '🙎🏿',
  },
  {
    char: '🙎‍♂️',
  },
  {
    char: '🙎‍♂',
  },
  {
    char: '🙎🏻‍♂️',
  },
  {
    char: '🙎🏻‍♂',
  },
  {
    char: '🙎🏼‍♂️',
  },
  {
    char: '🙎🏼‍♂',
  },
  {
    char: '🙎🏽‍♂️',
  },
  {
    char: '🙎🏽‍♂',
  },
  {
    char: '🙎🏾‍♂️',
  },
  {
    char: '🙎🏾‍♂',
  },
  {
    char: '🙎🏿‍♂️',
  },
  {
    char: '🙎🏿‍♂',
  },
  {
    char: '🙎‍♀️',
  },
  {
    char: '🙎‍♀',
  },
  {
    char: '🙎🏻‍♀️',
  },
  {
    char: '🙎🏻‍♀',
  },
  {
    char: '🙎🏼‍♀️',
  },
  {
    char: '🙎🏼‍♀',
  },
  {
    char: '🙎🏽‍♀️',
  },
  {
    char: '🙎🏽‍♀',
  },
  {
    char: '🙎🏾‍♀️',
  },
  {
    char: '🙎🏾‍♀',
  },
  {
    char: '🙎🏿‍♀️',
  },
  {
    char: '🙎🏿‍♀',
  },
  {
    char: '🙅',
  },
  {
    char: '🙅🏻',
  },
  {
    char: '🙅🏼',
  },
  {
    char: '🙅🏽',
  },
  {
    char: '🙅🏾',
  },
  {
    char: '🙅🏿',
  },
  {
    char: '🙅‍♂️',
  },
  {
    char: '🙅‍♂',
  },
  {
    char: '🙅🏻‍♂️',
  },
  {
    char: '🙅🏻‍♂',
  },
  {
    char: '🙅🏼‍♂️',
  },
  {
    char: '🙅🏼‍♂',
  },
  {
    char: '🙅🏽‍♂️',
  },
  {
    char: '🙅🏽‍♂',
  },
  {
    char: '🙅🏾‍♂️',
  },
  {
    char: '🙅🏾‍♂',
  },
  {
    char: '🙅🏿‍♂️',
  },
  {
    char: '🙅🏿‍♂',
  },
  {
    char: '🙅‍♀️',
  },
  {
    char: '🙅‍♀',
  },
  {
    char: '🙅🏻‍♀️',
  },
  {
    char: '🙅🏻‍♀',
  },
  {
    char: '🙅🏼‍♀️',
  },
  {
    char: '🙅🏼‍♀',
  },
  {
    char: '🙅🏽‍♀️',
  },
  {
    char: '🙅🏽‍♀',
  },
  {
    char: '🙅🏾‍♀️',
  },
  {
    char: '🙅🏾‍♀',
  },
  {
    char: '🙅🏿‍♀️',
  },
  {
    char: '🙅🏿‍♀',
  },
  {
    char: '🙆',
  },
  {
    char: '🙆🏻',
  },
  {
    char: '🙆🏼',
  },
  {
    char: '🙆🏽',
  },
  {
    char: '🙆🏾',
  },
  {
    char: '🙆🏿',
  },
  {
    char: '🙆‍♂️',
  },
  {
    char: '🙆‍♂',
  },
  {
    char: '🙆🏻‍♂️',
  },
  {
    char: '🙆🏻‍♂',
  },
  {
    char: '🙆🏼‍♂️',
  },
  {
    char: '🙆🏼‍♂',
  },
  {
    char: '🙆🏽‍♂️',
  },
  {
    char: '🙆🏽‍♂',
  },
  {
    char: '🙆🏾‍♂️',
  },
  {
    char: '🙆🏾‍♂',
  },
  {
    char: '🙆🏿‍♂️',
  },
  {
    char: '🙆🏿‍♂',
  },
  {
    char: '🙆‍♀️',
  },
  {
    char: '🙆‍♀',
  },
  {
    char: '🙆🏻‍♀️',
  },
  {
    char: '🙆🏻‍♀',
  },
  {
    char: '🙆🏼‍♀️',
  },
  {
    char: '🙆🏼‍♀',
  },
  {
    char: '🙆🏽‍♀️',
  },
  {
    char: '🙆🏽‍♀',
  },
  {
    char: '🙆🏾‍♀️',
  },
  {
    char: '🙆🏾‍♀',
  },
  {
    char: '🙆🏿‍♀️',
  },
  {
    char: '🙆🏿‍♀',
  },
  {
    char: '💁',
  },
  {
    char: '💁🏻',
  },
  {
    char: '💁🏼',
  },
  {
    char: '💁🏽',
  },
  {
    char: '💁🏾',
  },
  {
    char: '💁🏿',
  },
  {
    char: '💁‍♂️',
  },
  {
    char: '💁‍♂',
  },
  {
    char: '💁🏻‍♂️',
  },
  {
    char: '💁🏻‍♂',
  },
  {
    char: '💁🏼‍♂️',
  },
  {
    char: '💁🏼‍♂',
  },
  {
    char: '💁🏽‍♂️',
  },
  {
    char: '💁🏽‍♂',
  },
  {
    char: '💁🏾‍♂️',
  },
  {
    char: '💁🏾‍♂',
  },
  {
    char: '💁🏿‍♂️',
  },
  {
    char: '💁🏿‍♂',
  },
  {
    char: '💁‍♀️',
  },
  {
    char: '💁‍♀',
  },
  {
    char: '💁🏻‍♀️',
  },
  {
    char: '💁🏻‍♀',
  },
  {
    char: '💁🏼‍♀️',
  },
  {
    char: '💁🏼‍♀',
  },
  {
    char: '💁🏽‍♀️',
  },
  {
    char: '💁🏽‍♀',
  },
  {
    char: '💁🏾‍♀️',
  },
  {
    char: '💁🏾‍♀',
  },
  {
    char: '💁🏿‍♀️',
  },
  {
    char: '💁🏿‍♀',
  },
  {
    char: '🙋',
  },
  {
    char: '🙋🏻',
  },
  {
    char: '🙋🏼',
  },
  {
    char: '🙋🏽',
  },
  {
    char: '🙋🏾',
  },
  {
    char: '🙋🏿',
  },
  {
    char: '🙋‍♂️',
  },
  {
    char: '🙋‍♂',
  },
  {
    char: '🙋🏻‍♂️',
  },
  {
    char: '🙋🏻‍♂',
  },
  {
    char: '🙋🏼‍♂️',
  },
  {
    char: '🙋🏼‍♂',
  },
  {
    char: '🙋🏽‍♂️',
  },
  {
    char: '🙋🏽‍♂',
  },
  {
    char: '🙋🏾‍♂️',
  },
  {
    char: '🙋🏾‍♂',
  },
  {
    char: '🙋🏿‍♂️',
  },
  {
    char: '🙋🏿‍♂',
  },
  {
    char: '🙋‍♀️',
  },
  {
    char: '🙋‍♀',
  },
  {
    char: '🙋🏻‍♀️',
  },
  {
    char: '🙋🏻‍♀',
  },
  {
    char: '🙋🏼‍♀️',
  },
  {
    char: '🙋🏼‍♀',
  },
  {
    char: '🙋🏽‍♀️',
  },
  {
    char: '🙋🏽‍♀',
  },
  {
    char: '🙋🏾‍♀️',
  },
  {
    char: '🙋🏾‍♀',
  },
  {
    char: '🙋🏿‍♀️',
  },
  {
    char: '🙋🏿‍♀',
  },
  {
    char: '🧏',
  },
  {
    char: '🧏🏻',
  },
  {
    char: '🧏🏼',
  },
  {
    char: '🧏🏽',
  },
  {
    char: '🧏🏾',
  },
  {
    char: '🧏🏿',
  },
  {
    char: '🧏‍♂️',
  },
  {
    char: '🧏‍♂',
  },
  {
    char: '🧏🏻‍♂️',
  },
  {
    char: '🧏🏻‍♂',
  },
  {
    char: '🧏🏼‍♂️',
  },
  {
    char: '🧏🏼‍♂',
  },
  {
    char: '🧏🏽‍♂️',
  },
  {
    char: '🧏🏽‍♂',
  },
  {
    char: '🧏🏾‍♂️',
  },
  {
    char: '🧏🏾‍♂',
  },
  {
    char: '🧏🏿‍♂️',
  },
  {
    char: '🧏🏿‍♂',
  },
  {
    char: '🧏‍♀️',
  },
  {
    char: '🧏‍♀',
  },
  {
    char: '🧏🏻‍♀️',
  },
  {
    char: '🧏🏻‍♀',
  },
  {
    char: '🧏🏼‍♀️',
  },
  {
    char: '🧏🏼‍♀',
  },
  {
    char: '🧏🏽‍♀️',
  },
  {
    char: '🧏🏽‍♀',
  },
  {
    char: '🧏🏾‍♀️',
  },
  {
    char: '🧏🏾‍♀',
  },
  {
    char: '🧏🏿‍♀️',
  },
  {
    char: '🧏🏿‍♀',
  },
  {
    char: '🙇',
  },
  {
    char: '🙇🏻',
  },
  {
    char: '🙇🏼',
  },
  {
    char: '🙇🏽',
  },
  {
    char: '🙇🏾',
  },
  {
    char: '🙇🏿',
  },
  {
    char: '🙇‍♂️',
  },
  {
    char: '🙇‍♂',
  },
  {
    char: '🙇🏻‍♂️',
  },
  {
    char: '🙇🏻‍♂',
  },
  {
    char: '🙇🏼‍♂️',
  },
  {
    char: '🙇🏼‍♂',
  },
  {
    char: '🙇🏽‍♂️',
  },
  {
    char: '🙇🏽‍♂',
  },
  {
    char: '🙇🏾‍♂️',
  },
  {
    char: '🙇🏾‍♂',
  },
  {
    char: '🙇🏿‍♂️',
  },
  {
    char: '🙇🏿‍♂',
  },
  {
    char: '🙇‍♀️',
  },
  {
    char: '🙇‍♀',
  },
  {
    char: '🙇🏻‍♀️',
  },
  {
    char: '🙇🏻‍♀',
  },
  {
    char: '🙇🏼‍♀️',
  },
  {
    char: '🙇🏼‍♀',
  },
  {
    char: '🙇🏽‍♀️',
  },
  {
    char: '🙇🏽‍♀',
  },
  {
    char: '🙇🏾‍♀️',
  },
  {
    char: '🙇🏾‍♀',
  },
  {
    char: '🙇🏿‍♀️',
  },
  {
    char: '🙇🏿‍♀',
  },
  {
    char: '🤦',
  },
  {
    char: '🤦🏻',
  },
  {
    char: '🤦🏼',
  },
  {
    char: '🤦🏽',
  },
  {
    char: '🤦🏾',
  },
  {
    char: '🤦🏿',
  },
  {
    char: '🤦‍♂️',
  },
  {
    char: '🤦‍♂',
  },
  {
    char: '🤦🏻‍♂️',
  },
  {
    char: '🤦🏻‍♂',
  },
  {
    char: '🤦🏼‍♂️',
  },
  {
    char: '🤦🏼‍♂',
  },
  {
    char: '🤦🏽‍♂️',
  },
  {
    char: '🤦🏽‍♂',
  },
  {
    char: '🤦🏾‍♂️',
  },
  {
    char: '🤦🏾‍♂',
  },
  {
    char: '🤦🏿‍♂️',
  },
  {
    char: '🤦🏿‍♂',
  },
  {
    char: '🤦‍♀️',
  },
  {
    char: '🤦‍♀',
  },
  {
    char: '🤦🏻‍♀️',
  },
  {
    char: '🤦🏻‍♀',
  },
  {
    char: '🤦🏼‍♀️',
  },
  {
    char: '🤦🏼‍♀',
  },
  {
    char: '🤦🏽‍♀️',
  },
  {
    char: '🤦🏽‍♀',
  },
  {
    char: '🤦🏾‍♀️',
  },
  {
    char: '🤦🏾‍♀',
  },
  {
    char: '🤦🏿‍♀️',
  },
  {
    char: '🤦🏿‍♀',
  },
  {
    char: '🤷',
  },
  {
    char: '🤷🏻',
  },
  {
    char: '🤷🏼',
  },
  {
    char: '🤷🏽',
  },
  {
    char: '🤷🏾',
  },
  {
    char: '🤷🏿',
  },
  {
    char: '🤷‍♂️',
  },
  {
    char: '🤷‍♂',
  },
  {
    char: '🤷🏻‍♂️',
  },
  {
    char: '🤷🏻‍♂',
  },
  {
    char: '🤷🏼‍♂️',
  },
  {
    char: '🤷🏼‍♂',
  },
  {
    char: '🤷🏽‍♂️',
  },
  {
    char: '🤷🏽‍♂',
  },
  {
    char: '🤷🏾‍♂️',
  },
  {
    char: '🤷🏾‍♂',
  },
  {
    char: '🤷🏿‍♂️',
  },
  {
    char: '🤷🏿‍♂',
  },
  {
    char: '🤷‍♀️',
  },
  {
    char: '🤷‍♀',
  },
  {
    char: '🤷🏻‍♀️',
  },
  {
    char: '🤷🏻‍♀',
  },
  {
    char: '🤷🏼‍♀️',
  },
  {
    char: '🤷🏼‍♀',
  },
  {
    char: '🤷🏽‍♀️',
  },
  {
    char: '🤷🏽‍♀',
  },
  {
    char: '🤷🏾‍♀️',
  },
  {
    char: '🤷🏾‍♀',
  },
  {
    char: '🤷🏿‍♀️',
  },
  {
    char: '🤷🏿‍♀',
  },
  {
    char: '🧑‍⚕️',
  },
  {
    char: '🧑‍⚕',
  },
  {
    char: '🧑🏻‍⚕️',
  },
  {
    char: '🧑🏻‍⚕',
  },
  {
    char: '🧑🏼‍⚕️',
  },
  {
    char: '🧑🏼‍⚕',
  },
  {
    char: '🧑🏽‍⚕️',
  },
  {
    char: '🧑🏽‍⚕',
  },
  {
    char: '🧑🏾‍⚕️',
  },
  {
    char: '🧑🏾‍⚕',
  },
  {
    char: '🧑🏿‍⚕️',
  },
  {
    char: '🧑🏿‍⚕',
  },
  {
    char: '👨‍⚕️',
  },
  {
    char: '👨‍⚕',
  },
  {
    char: '👨🏻‍⚕️',
  },
  {
    char: '👨🏻‍⚕',
  },
  {
    char: '👨🏼‍⚕️',
  },
  {
    char: '👨🏼‍⚕',
  },
  {
    char: '👨🏽‍⚕️',
  },
  {
    char: '👨🏽‍⚕',
  },
  {
    char: '👨🏾‍⚕️',
  },
  {
    char: '👨🏾‍⚕',
  },
  {
    char: '👨🏿‍⚕️',
  },
  {
    char: '👨🏿‍⚕',
  },
  {
    char: '👩‍⚕️',
  },
  {
    char: '👩‍⚕',
  },
  {
    char: '👩🏻‍⚕️',
  },
  {
    char: '👩🏻‍⚕',
  },
  {
    char: '👩🏼‍⚕️',
  },
  {
    char: '👩🏼‍⚕',
  },
  {
    char: '👩🏽‍⚕️',
  },
  {
    char: '👩🏽‍⚕',
  },
  {
    char: '👩🏾‍⚕️',
  },
  {
    char: '👩🏾‍⚕',
  },
  {
    char: '👩🏿‍⚕️',
  },
  {
    char: '👩🏿‍⚕',
  },
  {
    char: '🧑‍🎓',
  },
  {
    char: '🧑🏻‍🎓',
  },
  {
    char: '🧑🏼‍🎓',
  },
  {
    char: '🧑🏽‍🎓',
  },
  {
    char: '🧑🏾‍🎓',
  },
  {
    char: '🧑🏿‍🎓',
  },
  {
    char: '👨‍🎓',
  },
  {
    char: '👨🏻‍🎓',
  },
  {
    char: '👨🏼‍🎓',
  },
  {
    char: '👨🏽‍🎓',
  },
  {
    char: '👨🏾‍🎓',
  },
  {
    char: '👨🏿‍🎓',
  },
  {
    char: '👩‍🎓',
  },
  {
    char: '👩🏻‍🎓',
  },
  {
    char: '👩🏼‍🎓',
  },
  {
    char: '👩🏽‍🎓',
  },
  {
    char: '👩🏾‍🎓',
  },
  {
    char: '👩🏿‍🎓',
  },
  {
    char: '🧑‍🏫',
  },
  {
    char: '🧑🏻‍🏫',
  },
  {
    char: '🧑🏼‍🏫',
  },
  {
    char: '🧑🏽‍🏫',
  },
  {
    char: '🧑🏾‍🏫',
  },
  {
    char: '🧑🏿‍🏫',
  },
  {
    char: '👨‍🏫',
  },
  {
    char: '👨🏻‍🏫',
  },
  {
    char: '👨🏼‍🏫',
  },
  {
    char: '👨🏽‍🏫',
  },
  {
    char: '👨🏾‍🏫',
  },
  {
    char: '👨🏿‍🏫',
  },
  {
    char: '👩‍🏫',
  },
  {
    char: '👩🏻‍🏫',
  },
  {
    char: '👩🏼‍🏫',
  },
  {
    char: '👩🏽‍🏫',
  },
  {
    char: '👩🏾‍🏫',
  },
  {
    char: '👩🏿‍🏫',
  },
  {
    char: '🧑‍⚖️',
  },
  {
    char: '🧑‍⚖',
  },
  {
    char: '🧑🏻‍⚖️',
  },
  {
    char: '🧑🏻‍⚖',
  },
  {
    char: '🧑🏼‍⚖️',
  },
  {
    char: '🧑🏼‍⚖',
  },
  {
    char: '🧑🏽‍⚖️',
  },
  {
    char: '🧑🏽‍⚖',
  },
  {
    char: '🧑🏾‍⚖️',
  },
  {
    char: '🧑🏾‍⚖',
  },
  {
    char: '🧑🏿‍⚖️',
  },
  {
    char: '🧑🏿‍⚖',
  },
  {
    char: '👨‍⚖️',
  },
  {
    char: '👨‍⚖',
  },
  {
    char: '👨🏻‍⚖️',
  },
  {
    char: '👨🏻‍⚖',
  },
  {
    char: '👨🏼‍⚖️',
  },
  {
    char: '👨🏼‍⚖',
  },
  {
    char: '👨🏽‍⚖️',
  },
  {
    char: '👨🏽‍⚖',
  },
  {
    char: '👨🏾‍⚖️',
  },
  {
    char: '👨🏾‍⚖',
  },
  {
    char: '👨🏿‍⚖️',
  },
  {
    char: '👨🏿‍⚖',
  },
  {
    char: '👩‍⚖️',
  },
  {
    char: '👩‍⚖',
  },
  {
    char: '👩🏻‍⚖️',
  },
  {
    char: '👩🏻‍⚖',
  },
  {
    char: '👩🏼‍⚖️',
  },
  {
    char: '👩🏼‍⚖',
  },
  {
    char: '👩🏽‍⚖️',
  },
  {
    char: '👩🏽‍⚖',
  },
  {
    char: '👩🏾‍⚖️',
  },
  {
    char: '👩🏾‍⚖',
  },
  {
    char: '👩🏿‍⚖️',
  },
  {
    char: '👩🏿‍⚖',
  },
  {
    char: '🧑‍🌾',
  },
  {
    char: '🧑🏻‍🌾',
  },
  {
    char: '🧑🏼‍🌾',
  },
  {
    char: '🧑🏽‍🌾',
  },
  {
    char: '🧑🏾‍🌾',
  },
  {
    char: '🧑🏿‍🌾',
  },
  {
    char: '👨‍🌾',
  },
  {
    char: '👨🏻‍🌾',
  },
  {
    char: '👨🏼‍🌾',
  },
  {
    char: '👨🏽‍🌾',
  },
  {
    char: '👨🏾‍🌾',
  },
  {
    char: '👨🏿‍🌾',
  },
  {
    char: '👩‍🌾',
  },
  {
    char: '👩🏻‍🌾',
  },
  {
    char: '👩🏼‍🌾',
  },
  {
    char: '👩🏽‍🌾',
  },
  {
    char: '👩🏾‍🌾',
  },
  {
    char: '👩🏿‍🌾',
  },
  {
    char: '🧑‍🍳',
  },
  {
    char: '🧑🏻‍🍳',
  },
  {
    char: '🧑🏼‍🍳',
  },
  {
    char: '🧑🏽‍🍳',
  },
  {
    char: '🧑🏾‍🍳',
  },
  {
    char: '🧑🏿‍🍳',
  },
  {
    char: '👨‍🍳',
  },
  {
    char: '👨🏻‍🍳',
  },
  {
    char: '👨🏼‍🍳',
  },
  {
    char: '👨🏽‍🍳',
  },
  {
    char: '👨🏾‍🍳',
  },
  {
    char: '👨🏿‍🍳',
  },
  {
    char: '👩‍🍳',
  },
  {
    char: '👩🏻‍🍳',
  },
  {
    char: '👩🏼‍🍳',
  },
  {
    char: '👩🏽‍🍳',
  },
  {
    char: '👩🏾‍🍳',
  },
  {
    char: '👩🏿‍🍳',
  },
  {
    char: '🧑‍🔧',
  },
  {
    char: '🧑🏻‍🔧',
  },
  {
    char: '🧑🏼‍🔧',
  },
  {
    char: '🧑🏽‍🔧',
  },
  {
    char: '🧑🏾‍🔧',
  },
  {
    char: '🧑🏿‍🔧',
  },
  {
    char: '👨‍🔧',
  },
  {
    char: '👨🏻‍🔧',
  },
  {
    char: '👨🏼‍🔧',
  },
  {
    char: '👨🏽‍🔧',
  },
  {
    char: '👨🏾‍🔧',
  },
  {
    char: '👨🏿‍🔧',
  },
  {
    char: '👩‍🔧',
  },
  {
    char: '👩🏻‍🔧',
  },
  {
    char: '👩🏼‍🔧',
  },
  {
    char: '👩🏽‍🔧',
  },
  {
    char: '👩🏾‍🔧',
  },
  {
    char: '👩🏿‍🔧',
  },
  {
    char: '🧑‍🏭',
  },
  {
    char: '🧑🏻‍🏭',
  },
  {
    char: '🧑🏼‍🏭',
  },
  {
    char: '🧑🏽‍🏭',
  },
  {
    char: '🧑🏾‍🏭',
  },
  {
    char: '🧑🏿‍🏭',
  },
  {
    char: '👨‍🏭',
  },
  {
    char: '👨🏻‍🏭',
  },
  {
    char: '👨🏼‍🏭',
  },
  {
    char: '👨🏽‍🏭',
  },
  {
    char: '👨🏾‍🏭',
  },
  {
    char: '👨🏿‍🏭',
  },
  {
    char: '👩‍🏭',
  },
  {
    char: '👩🏻‍🏭',
  },
  {
    char: '👩🏼‍🏭',
  },
  {
    char: '👩🏽‍🏭',
  },
  {
    char: '👩🏾‍🏭',
  },
  {
    char: '👩🏿‍🏭',
  },
  {
    char: '🧑‍💼',
  },
  {
    char: '🧑🏻‍💼',
  },
  {
    char: '🧑🏼‍💼',
  },
  {
    char: '🧑🏽‍💼',
  },
  {
    char: '🧑🏾‍💼',
  },
  {
    char: '🧑🏿‍💼',
  },
  {
    char: '👨‍💼',
  },
  {
    char: '👨🏻‍💼',
  },
  {
    char: '👨🏼‍💼',
  },
  {
    char: '👨🏽‍💼',
  },
  {
    char: '👨🏾‍💼',
  },
  {
    char: '👨🏿‍💼',
  },
  {
    char: '👩‍💼',
  },
  {
    char: '👩🏻‍💼',
  },
  {
    char: '👩🏼‍💼',
  },
  {
    char: '👩🏽‍💼',
  },
  {
    char: '👩🏾‍💼',
  },
  {
    char: '👩🏿‍💼',
  },
  {
    char: '🧑‍🔬',
  },
  {
    char: '🧑🏻‍🔬',
  },
  {
    char: '🧑🏼‍🔬',
  },
  {
    char: '🧑🏽‍🔬',
  },
  {
    char: '🧑🏾‍🔬',
  },
  {
    char: '🧑🏿‍🔬',
  },
  {
    char: '👨‍🔬',
  },
  {
    char: '👨🏻‍🔬',
  },
  {
    char: '👨🏼‍🔬',
  },
  {
    char: '👨🏽‍🔬',
  },
  {
    char: '👨🏾‍🔬',
  },
  {
    char: '👨🏿‍🔬',
  },
  {
    char: '👩‍🔬',
  },
  {
    char: '👩🏻‍🔬',
  },
  {
    char: '👩🏼‍🔬',
  },
  {
    char: '👩🏽‍🔬',
  },
  {
    char: '👩🏾‍🔬',
  },
  {
    char: '👩🏿‍🔬',
  },
  {
    char: '🧑‍💻',
  },
  {
    char: '🧑🏻‍💻',
  },
  {
    char: '🧑🏼‍💻',
  },
  {
    char: '🧑🏽‍💻',
  },
  {
    char: '🧑🏾‍💻',
  },
  {
    char: '🧑🏿‍💻',
  },
  {
    char: '👨‍💻',
  },
  {
    char: '👨🏻‍💻',
  },
  {
    char: '👨🏼‍💻',
  },
  {
    char: '👨🏽‍💻',
  },
  {
    char: '👨🏾‍💻',
  },
  {
    char: '👨🏿‍💻',
  },
  {
    char: '👩‍💻',
  },
  {
    char: '👩🏻‍💻',
  },
  {
    char: '👩🏼‍💻',
  },
  {
    char: '👩🏽‍💻',
  },
  {
    char: '👩🏾‍💻',
  },
  {
    char: '👩🏿‍💻',
  },
  {
    char: '🧑‍🎤',
  },
  {
    char: '🧑🏻‍🎤',
  },
  {
    char: '🧑🏼‍🎤',
  },
  {
    char: '🧑🏽‍🎤',
  },
  {
    char: '🧑🏾‍🎤',
  },
  {
    char: '🧑🏿‍🎤',
  },
  {
    char: '👨‍🎤',
  },
  {
    char: '👨🏻‍🎤',
  },
  {
    char: '👨🏼‍🎤',
  },
  {
    char: '👨🏽‍🎤',
  },
  {
    char: '👨🏾‍🎤',
  },
  {
    char: '👨🏿‍🎤',
  },
  {
    char: '👩‍🎤',
  },
  {
    char: '👩🏻‍🎤',
  },
  {
    char: '👩🏼‍🎤',
  },
  {
    char: '👩🏽‍🎤',
  },
  {
    char: '👩🏾‍🎤',
  },
  {
    char: '👩🏿‍🎤',
  },
  {
    char: '🧑‍🎨',
  },
  {
    char: '🧑🏻‍🎨',
  },
  {
    char: '🧑🏼‍🎨',
  },
  {
    char: '🧑🏽‍🎨',
  },
  {
    char: '🧑🏾‍🎨',
  },
  {
    char: '🧑🏿‍🎨',
  },
  {
    char: '👨‍🎨',
  },
  {
    char: '👨🏻‍🎨',
  },
  {
    char: '👨🏼‍🎨',
  },
  {
    char: '👨🏽‍🎨',
  },
  {
    char: '👨🏾‍🎨',
  },
  {
    char: '👨🏿‍🎨',
  },
  {
    char: '👩‍🎨',
  },
  {
    char: '👩🏻‍🎨',
  },
  {
    char: '👩🏼‍🎨',
  },
  {
    char: '👩🏽‍🎨',
  },
  {
    char: '👩🏾‍🎨',
  },
  {
    char: '👩🏿‍🎨',
  },
  {
    char: '🧑‍✈️',
  },
  {
    char: '🧑‍✈',
  },
  {
    char: '🧑🏻‍✈️',
  },
  {
    char: '🧑🏻‍✈',
  },
  {
    char: '🧑🏼‍✈️',
  },
  {
    char: '🧑🏼‍✈',
  },
  {
    char: '🧑🏽‍✈️',
  },
  {
    char: '🧑🏽‍✈',
  },
  {
    char: '🧑🏾‍✈️',
  },
  {
    char: '🧑🏾‍✈',
  },
  {
    char: '🧑🏿‍✈️',
  },
  {
    char: '🧑🏿‍✈',
  },
  {
    char: '👨‍✈️',
  },
  {
    char: '👨‍✈',
  },
  {
    char: '👨🏻‍✈️',
  },
  {
    char: '👨🏻‍✈',
  },
  {
    char: '👨🏼‍✈️',
  },
  {
    char: '👨🏼‍✈',
  },
  {
    char: '👨🏽‍✈️',
  },
  {
    char: '👨🏽‍✈',
  },
  {
    char: '👨🏾‍✈️',
  },
  {
    char: '👨🏾‍✈',
  },
  {
    char: '👨🏿‍✈️',
  },
  {
    char: '👨🏿‍✈',
  },
  {
    char: '👩‍✈️',
  },
  {
    char: '👩‍✈',
  },
  {
    char: '👩🏻‍✈️',
  },
  {
    char: '👩🏻‍✈',
  },
  {
    char: '👩🏼‍✈️',
  },
  {
    char: '👩🏼‍✈',
  },
  {
    char: '👩🏽‍✈️',
  },
  {
    char: '👩🏽‍✈',
  },
  {
    char: '👩🏾‍✈️',
  },
  {
    char: '👩🏾‍✈',
  },
  {
    char: '👩🏿‍✈️',
  },
  {
    char: '👩🏿‍✈',
  },
  {
    char: '🧑‍🚀',
  },
  {
    char: '🧑🏻‍🚀',
  },
  {
    char: '🧑🏼‍🚀',
  },
  {
    char: '🧑🏽‍🚀',
  },
  {
    char: '🧑🏾‍🚀',
  },
  {
    char: '🧑🏿‍🚀',
  },
  {
    char: '👨‍🚀',
  },
  {
    char: '👨🏻‍🚀',
  },
  {
    char: '👨🏼‍🚀',
  },
  {
    char: '👨🏽‍🚀',
  },
  {
    char: '👨🏾‍🚀',
  },
  {
    char: '👨🏿‍🚀',
  },
  {
    char: '👩‍🚀',
  },
  {
    char: '👩🏻‍🚀',
  },
  {
    char: '👩🏼‍🚀',
  },
  {
    char: '👩🏽‍🚀',
  },
  {
    char: '👩🏾‍🚀',
  },
  {
    char: '👩🏿‍🚀',
  },
  {
    char: '🧑‍🚒',
  },
  {
    char: '🧑🏻‍🚒',
  },
  {
    char: '🧑🏼‍🚒',
  },
  {
    char: '🧑🏽‍🚒',
  },
  {
    char: '🧑🏾‍🚒',
  },
  {
    char: '🧑🏿‍🚒',
  },
  {
    char: '👨‍🚒',
  },
  {
    char: '👨🏻‍🚒',
  },
  {
    char: '👨🏼‍🚒',
  },
  {
    char: '👨🏽‍🚒',
  },
  {
    char: '👨🏾‍🚒',
  },
  {
    char: '👨🏿‍🚒',
  },
  {
    char: '👩‍🚒',
  },
  {
    char: '👩🏻‍🚒',
  },
  {
    char: '👩🏼‍🚒',
  },
  {
    char: '👩🏽‍🚒',
  },
  {
    char: '👩🏾‍🚒',
  },
  {
    char: '👩🏿‍🚒',
  },
  {
    char: '👮',
  },
  {
    char: '👮🏻',
  },
  {
    char: '👮🏼',
  },
  {
    char: '👮🏽',
  },
  {
    char: '👮🏾',
  },
  {
    char: '👮🏿',
  },
  {
    char: '👮‍♂️',
  },
  {
    char: '👮‍♂',
  },
  {
    char: '👮🏻‍♂️',
  },
  {
    char: '👮🏻‍♂',
  },
  {
    char: '👮🏼‍♂️',
  },
  {
    char: '👮🏼‍♂',
  },
  {
    char: '👮🏽‍♂️',
  },
  {
    char: '👮🏽‍♂',
  },
  {
    char: '👮🏾‍♂️',
  },
  {
    char: '👮🏾‍♂',
  },
  {
    char: '👮🏿‍♂️',
  },
  {
    char: '👮🏿‍♂',
  },
  {
    char: '👮‍♀️',
  },
  {
    char: '👮‍♀',
  },
  {
    char: '👮🏻‍♀️',
  },
  {
    char: '👮🏻‍♀',
  },
  {
    char: '👮🏼‍♀️',
  },
  {
    char: '👮🏼‍♀',
  },
  {
    char: '👮🏽‍♀️',
  },
  {
    char: '👮🏽‍♀',
  },
  {
    char: '👮🏾‍♀️',
  },
  {
    char: '👮🏾‍♀',
  },
  {
    char: '👮🏿‍♀️',
  },
  {
    char: '👮🏿‍♀',
  },
  {
    char: '🕵️',
  },
  {
    char: '🕵',
  },
  {
    char: '🕵🏻',
  },
  {
    char: '🕵🏼',
  },
  {
    char: '🕵🏽',
  },
  {
    char: '🕵🏾',
  },
  {
    char: '🕵🏿',
  },
  {
    char: '🕵️‍♂️',
  },
  {
    char: '🕵‍♂️',
  },
  {
    char: '🕵️‍♂',
  },
  {
    char: '🕵‍♂',
  },
  {
    char: '🕵🏻‍♂️',
  },
  {
    char: '🕵🏻‍♂',
  },
  {
    char: '🕵🏼‍♂️',
  },
  {
    char: '🕵🏼‍♂',
  },
  {
    char: '🕵🏽‍♂️',
  },
  {
    char: '🕵🏽‍♂',
  },
  {
    char: '🕵🏾‍♂️',
  },
  {
    char: '🕵🏾‍♂',
  },
  {
    char: '🕵🏿‍♂️',
  },
  {
    char: '🕵🏿‍♂',
  },
  {
    char: '🕵️‍♀️',
  },
  {
    char: '🕵‍♀️',
  },
  {
    char: '🕵️‍♀',
  },
  {
    char: '🕵‍♀',
  },
  {
    char: '🕵🏻‍♀️',
  },
  {
    char: '🕵🏻‍♀',
  },
  {
    char: '🕵🏼‍♀️',
  },
  {
    char: '🕵🏼‍♀',
  },
  {
    char: '🕵🏽‍♀️',
  },
  {
    char: '🕵🏽‍♀',
  },
  {
    char: '🕵🏾‍♀️',
  },
  {
    char: '🕵🏾‍♀',
  },
  {
    char: '🕵🏿‍♀️',
  },
  {
    char: '🕵🏿‍♀',
  },
  {
    char: '💂',
  },
  {
    char: '💂🏻',
  },
  {
    char: '💂🏼',
  },
  {
    char: '💂🏽',
  },
  {
    char: '💂🏾',
  },
  {
    char: '💂🏿',
  },
  {
    char: '💂‍♂️',
  },
  {
    char: '💂‍♂',
  },
  {
    char: '💂🏻‍♂️',
  },
  {
    char: '💂🏻‍♂',
  },
  {
    char: '💂🏼‍♂️',
  },
  {
    char: '💂🏼‍♂',
  },
  {
    char: '💂🏽‍♂️',
  },
  {
    char: '💂🏽‍♂',
  },
  {
    char: '💂🏾‍♂️',
  },
  {
    char: '💂🏾‍♂',
  },
  {
    char: '💂🏿‍♂️',
  },
  {
    char: '💂🏿‍♂',
  },
  {
    char: '💂‍♀️',
  },
  {
    char: '💂‍♀',
  },
  {
    char: '💂🏻‍♀️',
  },
  {
    char: '💂🏻‍♀',
  },
  {
    char: '💂🏼‍♀️',
  },
  {
    char: '💂🏼‍♀',
  },
  {
    char: '💂🏽‍♀️',
  },
  {
    char: '💂🏽‍♀',
  },
  {
    char: '💂🏾‍♀️',
  },
  {
    char: '💂🏾‍♀',
  },
  {
    char: '💂🏿‍♀️',
  },
  {
    char: '💂🏿‍♀',
  },
  {
    char: '🥷',
  },
  {
    char: '🥷🏻',
  },
  {
    char: '🥷🏼',
  },
  {
    char: '🥷🏽',
  },
  {
    char: '🥷🏾',
  },
  {
    char: '🥷🏿',
  },
  {
    char: '👷',
  },
  {
    char: '👷🏻',
  },
  {
    char: '👷🏼',
  },
  {
    char: '👷🏽',
  },
  {
    char: '👷🏾',
  },
  {
    char: '👷🏿',
  },
  {
    char: '👷‍♂️',
  },
  {
    char: '👷‍♂',
  },
  {
    char: '👷🏻‍♂️',
  },
  {
    char: '👷🏻‍♂',
  },
  {
    char: '👷🏼‍♂️',
  },
  {
    char: '👷🏼‍♂',
  },
  {
    char: '👷🏽‍♂️',
  },
  {
    char: '👷🏽‍♂',
  },
  {
    char: '👷🏾‍♂️',
  },
  {
    char: '👷🏾‍♂',
  },
  {
    char: '👷🏿‍♂️',
  },
  {
    char: '👷🏿‍♂',
  },
  {
    char: '👷‍♀️',
  },
  {
    char: '👷‍♀',
  },
  {
    char: '👷🏻‍♀️',
  },
  {
    char: '👷🏻‍♀',
  },
  {
    char: '👷🏼‍♀️',
  },
  {
    char: '👷🏼‍♀',
  },
  {
    char: '👷🏽‍♀️',
  },
  {
    char: '👷🏽‍♀',
  },
  {
    char: '👷🏾‍♀️',
  },
  {
    char: '👷🏾‍♀',
  },
  {
    char: '👷🏿‍♀️',
  },
  {
    char: '👷🏿‍♀',
  },
  {
    char: '🤴',
  },
  {
    char: '🤴🏻',
  },
  {
    char: '🤴🏼',
  },
  {
    char: '🤴🏽',
  },
  {
    char: '🤴🏾',
  },
  {
    char: '🤴🏿',
  },
  {
    char: '👸',
  },
  {
    char: '👸🏻',
  },
  {
    char: '👸🏼',
  },
  {
    char: '👸🏽',
  },
  {
    char: '👸🏾',
  },
  {
    char: '👸🏿',
  },
  {
    char: '👳',
  },
  {
    char: '👳🏻',
  },
  {
    char: '👳🏼',
  },
  {
    char: '👳🏽',
  },
  {
    char: '👳🏾',
  },
  {
    char: '👳🏿',
  },
  {
    char: '👳‍♂️',
  },
  {
    char: '👳‍♂',
  },
  {
    char: '👳🏻‍♂️',
  },
  {
    char: '👳🏻‍♂',
  },
  {
    char: '👳🏼‍♂️',
  },
  {
    char: '👳🏼‍♂',
  },
  {
    char: '👳🏽‍♂️',
  },
  {
    char: '👳🏽‍♂',
  },
  {
    char: '👳🏾‍♂️',
  },
  {
    char: '👳🏾‍♂',
  },
  {
    char: '👳🏿‍♂️',
  },
  {
    char: '👳🏿‍♂',
  },
  {
    char: '👳‍♀️',
  },
  {
    char: '👳‍♀',
  },
  {
    char: '👳🏻‍♀️',
  },
  {
    char: '👳🏻‍♀',
  },
  {
    char: '👳🏼‍♀️',
  },
  {
    char: '👳🏼‍♀',
  },
  {
    char: '👳🏽‍♀️',
  },
  {
    char: '👳🏽‍♀',
  },
  {
    char: '👳🏾‍♀️',
  },
  {
    char: '👳🏾‍♀',
  },
  {
    char: '👳🏿‍♀️',
  },
  {
    char: '👳🏿‍♀',
  },
  {
    char: '👲',
  },
  {
    char: '👲🏻',
  },
  {
    char: '👲🏼',
  },
  {
    char: '👲🏽',
  },
  {
    char: '👲🏾',
  },
  {
    char: '👲🏿',
  },
  {
    char: '🧕',
  },
  {
    char: '🧕🏻',
  },
  {
    char: '🧕🏼',
  },
  {
    char: '🧕🏽',
  },
  {
    char: '🧕🏾',
  },
  {
    char: '🧕🏿',
  },
  {
    char: '🤵',
  },
  {
    char: '🤵🏻',
  },
  {
    char: '🤵🏼',
  },
  {
    char: '🤵🏽',
  },
  {
    char: '🤵🏾',
  },
  {
    char: '🤵🏿',
  },
  {
    char: '🤵‍♂️',
  },
  {
    char: '🤵‍♂',
  },
  {
    char: '🤵🏻‍♂️',
  },
  {
    char: '🤵🏻‍♂',
  },
  {
    char: '🤵🏼‍♂️',
  },
  {
    char: '🤵🏼‍♂',
  },
  {
    char: '🤵🏽‍♂️',
  },
  {
    char: '🤵🏽‍♂',
  },
  {
    char: '🤵🏾‍♂️',
  },
  {
    char: '🤵🏾‍♂',
  },
  {
    char: '🤵🏿‍♂️',
  },
  {
    char: '🤵🏿‍♂',
  },
  {
    char: '🤵‍♀️',
  },
  {
    char: '🤵‍♀',
  },
  {
    char: '🤵🏻‍♀️',
  },
  {
    char: '🤵🏻‍♀',
  },
  {
    char: '🤵🏼‍♀️',
  },
  {
    char: '🤵🏼‍♀',
  },
  {
    char: '🤵🏽‍♀️',
  },
  {
    char: '🤵🏽‍♀',
  },
  {
    char: '🤵🏾‍♀️',
  },
  {
    char: '🤵🏾‍♀',
  },
  {
    char: '🤵🏿‍♀️',
  },
  {
    char: '🤵🏿‍♀',
  },
  {
    char: '👰',
  },
  {
    char: '👰🏻',
  },
  {
    char: '👰🏼',
  },
  {
    char: '👰🏽',
  },
  {
    char: '👰🏾',
  },
  {
    char: '👰🏿',
  },
  {
    char: '👰‍♂️',
  },
  {
    char: '👰‍♂',
  },
  {
    char: '👰🏻‍♂️',
  },
  {
    char: '👰🏻‍♂',
  },
  {
    char: '👰🏼‍♂️',
  },
  {
    char: '👰🏼‍♂',
  },
  {
    char: '👰🏽‍♂️',
  },
  {
    char: '👰🏽‍♂',
  },
  {
    char: '👰🏾‍♂️',
  },
  {
    char: '👰🏾‍♂',
  },
  {
    char: '👰🏿‍♂️',
  },
  {
    char: '👰🏿‍♂',
  },
  {
    char: '👰‍♀️',
  },
  {
    char: '👰‍♀',
  },
  {
    char: '👰🏻‍♀️',
  },
  {
    char: '👰🏻‍♀',
  },
  {
    char: '👰🏼‍♀️',
  },
  {
    char: '👰🏼‍♀',
  },
  {
    char: '👰🏽‍♀️',
  },
  {
    char: '👰🏽‍♀',
  },
  {
    char: '👰🏾‍♀️',
  },
  {
    char: '👰🏾‍♀',
  },
  {
    char: '👰🏿‍♀️',
  },
  {
    char: '👰🏿‍♀',
  },
  {
    char: '🤰',
  },
  {
    char: '🤰🏻',
  },
  {
    char: '🤰🏼',
  },
  {
    char: '🤰🏽',
  },
  {
    char: '🤰🏾',
  },
  {
    char: '🤰🏿',
  },
  {
    char: '🤱',
  },
  {
    char: '🤱🏻',
  },
  {
    char: '🤱🏼',
  },
  {
    char: '🤱🏽',
  },
  {
    char: '🤱🏾',
  },
  {
    char: '🤱🏿',
  },
  {
    char: '👩‍🍼',
  },
  {
    char: '👩🏻‍🍼',
  },
  {
    char: '👩🏼‍🍼',
  },
  {
    char: '👩🏽‍🍼',
  },
  {
    char: '👩🏾‍🍼',
  },
  {
    char: '👩🏿‍🍼',
  },
  {
    char: '👨‍🍼',
  },
  {
    char: '👨🏻‍🍼',
  },
  {
    char: '👨🏼‍🍼',
  },
  {
    char: '👨🏽‍🍼',
  },
  {
    char: '👨🏾‍🍼',
  },
  {
    char: '👨🏿‍🍼',
  },
  {
    char: '🧑‍🍼',
  },
  {
    char: '🧑🏻‍🍼',
  },
  {
    char: '🧑🏼‍🍼',
  },
  {
    char: '🧑🏽‍🍼',
  },
  {
    char: '🧑🏾‍🍼',
  },
  {
    char: '🧑🏿‍🍼',
  },
  {
    char: '👼',
  },
  {
    char: '👼🏻',
  },
  {
    char: '👼🏼',
  },
  {
    char: '👼🏽',
  },
  {
    char: '👼🏾',
  },
  {
    char: '👼🏿',
  },
  {
    char: '🎅',
  },
  {
    char: '🎅🏻',
  },
  {
    char: '🎅🏼',
  },
  {
    char: '🎅🏽',
  },
  {
    char: '🎅🏾',
  },
  {
    char: '🎅🏿',
  },
  {
    char: '🤶',
  },
  {
    char: '🤶🏻',
  },
  {
    char: '🤶🏼',
  },
  {
    char: '🤶🏽',
  },
  {
    char: '🤶🏾',
  },
  {
    char: '🤶🏿',
  },
  {
    char: '🧑‍🎄',
  },
  {
    char: '🧑🏻‍🎄',
  },
  {
    char: '🧑🏼‍🎄',
  },
  {
    char: '🧑🏽‍🎄',
  },
  {
    char: '🧑🏾‍🎄',
  },
  {
    char: '🧑🏿‍🎄',
  },
  {
    char: '🦸',
  },
  {
    char: '🦸🏻',
  },
  {
    char: '🦸🏼',
  },
  {
    char: '🦸🏽',
  },
  {
    char: '🦸🏾',
  },
  {
    char: '🦸🏿',
  },
  {
    char: '🦸‍♂️',
  },
  {
    char: '🦸‍♂',
  },
  {
    char: '🦸🏻‍♂️',
  },
  {
    char: '🦸🏻‍♂',
  },
  {
    char: '🦸🏼‍♂️',
  },
  {
    char: '🦸🏼‍♂',
  },
  {
    char: '🦸🏽‍♂️',
  },
  {
    char: '🦸🏽‍♂',
  },
  {
    char: '🦸🏾‍♂️',
  },
  {
    char: '🦸🏾‍♂',
  },
  {
    char: '🦸🏿‍♂️',
  },
  {
    char: '🦸🏿‍♂',
  },
  {
    char: '🦸‍♀️',
  },
  {
    char: '🦸‍♀',
  },
  {
    char: '🦸🏻‍♀️',
  },
  {
    char: '🦸🏻‍♀',
  },
  {
    char: '🦸🏼‍♀️',
  },
  {
    char: '🦸🏼‍♀',
  },
  {
    char: '🦸🏽‍♀️',
  },
  {
    char: '🦸🏽‍♀',
  },
  {
    char: '🦸🏾‍♀️',
  },
  {
    char: '🦸🏾‍♀',
  },
  {
    char: '🦸🏿‍♀️',
  },
  {
    char: '🦸🏿‍♀',
  },
  {
    char: '🦹',
  },
  {
    char: '🦹🏻',
  },
  {
    char: '🦹🏼',
  },
  {
    char: '🦹🏽',
  },
  {
    char: '🦹🏾',
  },
  {
    char: '🦹🏿',
  },
  {
    char: '🦹‍♂️',
  },
  {
    char: '🦹‍♂',
  },
  {
    char: '🦹🏻‍♂️',
  },
  {
    char: '🦹🏻‍♂',
  },
  {
    char: '🦹🏼‍♂️',
  },
  {
    char: '🦹🏼‍♂',
  },
  {
    char: '🦹🏽‍♂️',
  },
  {
    char: '🦹🏽‍♂',
  },
  {
    char: '🦹🏾‍♂️',
  },
  {
    char: '🦹🏾‍♂',
  },
  {
    char: '🦹🏿‍♂️',
  },
  {
    char: '🦹🏿‍♂',
  },
  {
    char: '🦹‍♀️',
  },
  {
    char: '🦹‍♀',
  },
  {
    char: '🦹🏻‍♀️',
  },
  {
    char: '🦹🏻‍♀',
  },
  {
    char: '🦹🏼‍♀️',
  },
  {
    char: '🦹🏼‍♀',
  },
  {
    char: '🦹🏽‍♀️',
  },
  {
    char: '🦹🏽‍♀',
  },
  {
    char: '🦹🏾‍♀️',
  },
  {
    char: '🦹🏾‍♀',
  },
  {
    char: '🦹🏿‍♀️',
  },
  {
    char: '🦹🏿‍♀',
  },
  {
    char: '🧙',
  },
  {
    char: '🧙🏻',
  },
  {
    char: '🧙🏼',
  },
  {
    char: '🧙🏽',
  },
  {
    char: '🧙🏾',
  },
  {
    char: '🧙🏿',
  },
  {
    char: '🧙‍♂️',
  },
  {
    char: '🧙‍♂',
  },
  {
    char: '🧙🏻‍♂️',
  },
  {
    char: '🧙🏻‍♂',
  },
  {
    char: '🧙🏼‍♂️',
  },
  {
    char: '🧙🏼‍♂',
  },
  {
    char: '🧙🏽‍♂️',
  },
  {
    char: '🧙🏽‍♂',
  },
  {
    char: '🧙🏾‍♂️',
  },
  {
    char: '🧙🏾‍♂',
  },
  {
    char: '🧙🏿‍♂️',
  },
  {
    char: '🧙🏿‍♂',
  },
  {
    char: '🧙‍♀️',
  },
  {
    char: '🧙‍♀',
  },
  {
    char: '🧙🏻‍♀️',
  },
  {
    char: '🧙🏻‍♀',
  },
  {
    char: '🧙🏼‍♀️',
  },
  {
    char: '🧙🏼‍♀',
  },
  {
    char: '🧙🏽‍♀️',
  },
  {
    char: '🧙🏽‍♀',
  },
  {
    char: '🧙🏾‍♀️',
  },
  {
    char: '🧙🏾‍♀',
  },
  {
    char: '🧙🏿‍♀️',
  },
  {
    char: '🧙🏿‍♀',
  },
  {
    char: '🧚',
  },
  {
    char: '🧚🏻',
  },
  {
    char: '🧚🏼',
  },
  {
    char: '🧚🏽',
  },
  {
    char: '🧚🏾',
  },
  {
    char: '🧚🏿',
  },
  {
    char: '🧚‍♂️',
  },
  {
    char: '🧚‍♂',
  },
  {
    char: '🧚🏻‍♂️',
  },
  {
    char: '🧚🏻‍♂',
  },
  {
    char: '🧚🏼‍♂️',
  },
  {
    char: '🧚🏼‍♂',
  },
  {
    char: '🧚🏽‍♂️',
  },
  {
    char: '🧚🏽‍♂',
  },
  {
    char: '🧚🏾‍♂️',
  },
  {
    char: '🧚🏾‍♂',
  },
  {
    char: '🧚🏿‍♂️',
  },
  {
    char: '🧚🏿‍♂',
  },
  {
    char: '🧚‍♀️',
  },
  {
    char: '🧚‍♀',
  },
  {
    char: '🧚🏻‍♀️',
  },
  {
    char: '🧚🏻‍♀',
  },
  {
    char: '🧚🏼‍♀️',
  },
  {
    char: '🧚🏼‍♀',
  },
  {
    char: '🧚🏽‍♀️',
  },
  {
    char: '🧚🏽‍♀',
  },
  {
    char: '🧚🏾‍♀️',
  },
  {
    char: '🧚🏾‍♀',
  },
  {
    char: '🧚🏿‍♀️',
  },
  {
    char: '🧚🏿‍♀',
  },
  {
    char: '🧛',
  },
  {
    char: '🧛🏻',
  },
  {
    char: '🧛🏼',
  },
  {
    char: '🧛🏽',
  },
  {
    char: '🧛🏾',
  },
  {
    char: '🧛🏿',
  },
  {
    char: '🧛‍♂️',
  },
  {
    char: '🧛‍♂',
  },
  {
    char: '🧛🏻‍♂️',
  },
  {
    char: '🧛🏻‍♂',
  },
  {
    char: '🧛🏼‍♂️',
  },
  {
    char: '🧛🏼‍♂',
  },
  {
    char: '🧛🏽‍♂️',
  },
  {
    char: '🧛🏽‍♂',
  },
  {
    char: '🧛🏾‍♂️',
  },
  {
    char: '🧛🏾‍♂',
  },
  {
    char: '🧛🏿‍♂️',
  },
  {
    char: '🧛🏿‍♂',
  },
  {
    char: '🧛‍♀️',
  },
  {
    char: '🧛‍♀',
  },
  {
    char: '🧛🏻‍♀️',
  },
  {
    char: '🧛🏻‍♀',
  },
  {
    char: '🧛🏼‍♀️',
  },
  {
    char: '🧛🏼‍♀',
  },
  {
    char: '🧛🏽‍♀️',
  },
  {
    char: '🧛🏽‍♀',
  },
  {
    char: '🧛🏾‍♀️',
  },
  {
    char: '🧛🏾‍♀',
  },
  {
    char: '🧛🏿‍♀️',
  },
  {
    char: '🧛🏿‍♀',
  },
  {
    char: '🧜',
  },
  {
    char: '🧜🏻',
  },
  {
    char: '🧜🏼',
  },
  {
    char: '🧜🏽',
  },
  {
    char: '🧜🏾',
  },
  {
    char: '🧜🏿',
  },
  {
    char: '🧜‍♂️',
  },
  {
    char: '🧜‍♂',
  },
  {
    char: '🧜🏻‍♂️',
  },
  {
    char: '🧜🏻‍♂',
  },
  {
    char: '🧜🏼‍♂️',
  },
  {
    char: '🧜🏼‍♂',
  },
  {
    char: '🧜🏽‍♂️',
  },
  {
    char: '🧜🏽‍♂',
  },
  {
    char: '🧜🏾‍♂️',
  },
  {
    char: '🧜🏾‍♂',
  },
  {
    char: '🧜🏿‍♂️',
  },
  {
    char: '🧜🏿‍♂',
  },
  {
    char: '🧜‍♀️',
  },
  {
    char: '🧜‍♀',
  },
  {
    char: '🧜🏻‍♀️',
  },
  {
    char: '🧜🏻‍♀',
  },
  {
    char: '🧜🏼‍♀️',
  },
  {
    char: '🧜🏼‍♀',
  },
  {
    char: '🧜🏽‍♀️',
  },
  {
    char: '🧜🏽‍♀',
  },
  {
    char: '🧜🏾‍♀️',
  },
  {
    char: '🧜🏾‍♀',
  },
  {
    char: '🧜🏿‍♀️',
  },
  {
    char: '🧜🏿‍♀',
  },
  {
    char: '🧝',
  },
  {
    char: '🧝🏻',
  },
  {
    char: '🧝🏼',
  },
  {
    char: '🧝🏽',
  },
  {
    char: '🧝🏾',
  },
  {
    char: '🧝🏿',
  },
  {
    char: '🧝‍♂️',
  },
  {
    char: '🧝‍♂',
  },
  {
    char: '🧝🏻‍♂️',
  },
  {
    char: '🧝🏻‍♂',
  },
  {
    char: '🧝🏼‍♂️',
  },
  {
    char: '🧝🏼‍♂',
  },
  {
    char: '🧝🏽‍♂️',
  },
  {
    char: '🧝🏽‍♂',
  },
  {
    char: '🧝🏾‍♂️',
  },
  {
    char: '🧝🏾‍♂',
  },
  {
    char: '🧝🏿‍♂️',
  },
  {
    char: '🧝🏿‍♂',
  },
  {
    char: '🧝‍♀️',
  },
  {
    char: '🧝‍♀',
  },
  {
    char: '🧝🏻‍♀️',
  },
  {
    char: '🧝🏻‍♀',
  },
  {
    char: '🧝🏼‍♀️',
  },
  {
    char: '🧝🏼‍♀',
  },
  {
    char: '🧝🏽‍♀️',
  },
  {
    char: '🧝🏽‍♀',
  },
  {
    char: '🧝🏾‍♀️',
  },
  {
    char: '🧝🏾‍♀',
  },
  {
    char: '🧝🏿‍♀️',
  },
  {
    char: '🧝🏿‍♀',
  },
  {
    char: '🧞',
  },
  {
    char: '🧞‍♂️',
  },
  {
    char: '🧞‍♂',
  },
  {
    char: '🧞‍♀️',
  },
  {
    char: '🧞‍♀',
  },
  {
    char: '🧟',
  },
  {
    char: '🧟‍♂️',
  },
  {
    char: '🧟‍♂',
  },
  {
    char: '🧟‍♀️',
  },
  {
    char: '🧟‍♀',
  },
  {
    char: '💆',
  },
  {
    char: '💆🏻',
  },
  {
    char: '💆🏼',
  },
  {
    char: '💆🏽',
  },
  {
    char: '💆🏾',
  },
  {
    char: '💆🏿',
  },
  {
    char: '💆‍♂️',
  },
  {
    char: '💆‍♂',
  },
  {
    char: '💆🏻‍♂️',
  },
  {
    char: '💆🏻‍♂',
  },
  {
    char: '💆🏼‍♂️',
  },
  {
    char: '💆🏼‍♂',
  },
  {
    char: '💆🏽‍♂️',
  },
  {
    char: '💆🏽‍♂',
  },
  {
    char: '💆🏾‍♂️',
  },
  {
    char: '💆🏾‍♂',
  },
  {
    char: '💆🏿‍♂️',
  },
  {
    char: '💆🏿‍♂',
  },
  {
    char: '💆‍♀️',
  },
  {
    char: '💆‍♀',
  },
  {
    char: '💆🏻‍♀️',
  },
  {
    char: '💆🏻‍♀',
  },
  {
    char: '💆🏼‍♀️',
  },
  {
    char: '💆🏼‍♀',
  },
  {
    char: '💆🏽‍♀️',
  },
  {
    char: '💆🏽‍♀',
  },
  {
    char: '💆🏾‍♀️',
  },
  {
    char: '💆🏾‍♀',
  },
  {
    char: '💆🏿‍♀️',
  },
  {
    char: '💆🏿‍♀',
  },
  {
    char: '💇',
  },
  {
    char: '💇🏻',
  },
  {
    char: '💇🏼',
  },
  {
    char: '💇🏽',
  },
  {
    char: '💇🏾',
  },
  {
    char: '💇🏿',
  },
  {
    char: '💇‍♂️',
  },
  {
    char: '💇‍♂',
  },
  {
    char: '💇🏻‍♂️',
  },
  {
    char: '💇🏻‍♂',
  },
  {
    char: '💇🏼‍♂️',
  },
  {
    char: '💇🏼‍♂',
  },
  {
    char: '💇🏽‍♂️',
  },
  {
    char: '💇🏽‍♂',
  },
  {
    char: '💇🏾‍♂️',
  },
  {
    char: '💇🏾‍♂',
  },
  {
    char: '💇🏿‍♂️',
  },
  {
    char: '💇🏿‍♂',
  },
  {
    char: '💇‍♀️',
  },
  {
    char: '💇‍♀',
  },
  {
    char: '💇🏻‍♀️',
  },
  {
    char: '💇🏻‍♀',
  },
  {
    char: '💇🏼‍♀️',
  },
  {
    char: '💇🏼‍♀',
  },
  {
    char: '💇🏽‍♀️',
  },
  {
    char: '💇🏽‍♀',
  },
  {
    char: '💇🏾‍♀️',
  },
  {
    char: '💇🏾‍♀',
  },
  {
    char: '💇🏿‍♀️',
  },
  {
    char: '💇🏿‍♀',
  },
  {
    char: '🚶',
  },
  {
    char: '🚶🏻',
  },
  {
    char: '🚶🏼',
  },
  {
    char: '🚶🏽',
  },
  {
    char: '🚶🏾',
  },
  {
    char: '🚶🏿',
  },
  {
    char: '🚶‍♂️',
  },
  {
    char: '🚶‍♂',
  },
  {
    char: '🚶🏻‍♂️',
  },
  {
    char: '🚶🏻‍♂',
  },
  {
    char: '🚶🏼‍♂️',
  },
  {
    char: '🚶🏼‍♂',
  },
  {
    char: '🚶🏽‍♂️',
  },
  {
    char: '🚶🏽‍♂',
  },
  {
    char: '🚶🏾‍♂️',
  },
  {
    char: '🚶🏾‍♂',
  },
  {
    char: '🚶🏿‍♂️',
  },
  {
    char: '🚶🏿‍♂',
  },
  {
    char: '🚶‍♀️',
  },
  {
    char: '🚶‍♀',
  },
  {
    char: '🚶🏻‍♀️',
  },
  {
    char: '🚶🏻‍♀',
  },
  {
    char: '🚶🏼‍♀️',
  },
  {
    char: '🚶🏼‍♀',
  },
  {
    char: '🚶🏽‍♀️',
  },
  {
    char: '🚶🏽‍♀',
  },
  {
    char: '🚶🏾‍♀️',
  },
  {
    char: '🚶🏾‍♀',
  },
  {
    char: '🚶🏿‍♀️',
  },
  {
    char: '🚶🏿‍♀',
  },
  {
    char: '🧍',
  },
  {
    char: '🧍🏻',
  },
  {
    char: '🧍🏼',
  },
  {
    char: '🧍🏽',
  },
  {
    char: '🧍🏾',
  },
  {
    char: '🧍🏿',
  },
  {
    char: '🧍‍♂️',
  },
  {
    char: '🧍‍♂',
  },
  {
    char: '🧍🏻‍♂️',
  },
  {
    char: '🧍🏻‍♂',
  },
  {
    char: '🧍🏼‍♂️',
  },
  {
    char: '🧍🏼‍♂',
  },
  {
    char: '🧍🏽‍♂️',
  },
  {
    char: '🧍🏽‍♂',
  },
  {
    char: '🧍🏾‍♂️',
  },
  {
    char: '🧍🏾‍♂',
  },
  {
    char: '🧍🏿‍♂️',
  },
  {
    char: '🧍🏿‍♂',
  },
  {
    char: '🧍‍♀️',
  },
  {
    char: '🧍‍♀',
  },
  {
    char: '🧍🏻‍♀️',
  },
  {
    char: '🧍🏻‍♀',
  },
  {
    char: '🧍🏼‍♀️',
  },
  {
    char: '🧍🏼‍♀',
  },
  {
    char: '🧍🏽‍♀️',
  },
  {
    char: '🧍🏽‍♀',
  },
  {
    char: '🧍🏾‍♀️',
  },
  {
    char: '🧍🏾‍♀',
  },
  {
    char: '🧍🏿‍♀️',
  },
  {
    char: '🧍🏿‍♀',
  },
  {
    char: '🧎',
  },
  {
    char: '🧎🏻',
  },
  {
    char: '🧎🏼',
  },
  {
    char: '🧎🏽',
  },
  {
    char: '🧎🏾',
  },
  {
    char: '🧎🏿',
  },
  {
    char: '🧎‍♂️',
  },
  {
    char: '🧎‍♂',
  },
  {
    char: '🧎🏻‍♂️',
  },
  {
    char: '🧎🏻‍♂',
  },
  {
    char: '🧎🏼‍♂️',
  },
  {
    char: '🧎🏼‍♂',
  },
  {
    char: '🧎🏽‍♂️',
  },
  {
    char: '🧎🏽‍♂',
  },
  {
    char: '🧎🏾‍♂️',
  },
  {
    char: '🧎🏾‍♂',
  },
  {
    char: '🧎🏿‍♂️',
  },
  {
    char: '🧎🏿‍♂',
  },
  {
    char: '🧎‍♀️',
  },
  {
    char: '🧎‍♀',
  },
  {
    char: '🧎🏻‍♀️',
  },
  {
    char: '🧎🏻‍♀',
  },
  {
    char: '🧎🏼‍♀️',
  },
  {
    char: '🧎🏼‍♀',
  },
  {
    char: '🧎🏽‍♀️',
  },
  {
    char: '🧎🏽‍♀',
  },
  {
    char: '🧎🏾‍♀️',
  },
  {
    char: '🧎🏾‍♀',
  },
  {
    char: '🧎🏿‍♀️',
  },
  {
    char: '🧎🏿‍♀',
  },
  {
    char: '🧑‍🦯',
  },
  {
    char: '🧑🏻‍🦯',
  },
  {
    char: '🧑🏼‍🦯',
  },
  {
    char: '🧑🏽‍🦯',
  },
  {
    char: '🧑🏾‍🦯',
  },
  {
    char: '🧑🏿‍🦯',
  },
  {
    char: '👨‍🦯',
  },
  {
    char: '👨🏻‍🦯',
  },
  {
    char: '👨🏼‍🦯',
  },
  {
    char: '👨🏽‍🦯',
  },
  {
    char: '👨🏾‍🦯',
  },
  {
    char: '👨🏿‍🦯',
  },
  {
    char: '👩‍🦯',
  },
  {
    char: '👩🏻‍🦯',
  },
  {
    char: '👩🏼‍🦯',
  },
  {
    char: '👩🏽‍🦯',
  },
  {
    char: '👩🏾‍🦯',
  },
  {
    char: '👩🏿‍🦯',
  },
  {
    char: '🧑‍🦼',
  },
  {
    char: '🧑🏻‍🦼',
  },
  {
    char: '🧑🏼‍🦼',
  },
  {
    char: '🧑🏽‍🦼',
  },
  {
    char: '🧑🏾‍🦼',
  },
  {
    char: '🧑🏿‍🦼',
  },
  {
    char: '👨‍🦼',
  },
  {
    char: '👨🏻‍🦼',
  },
  {
    char: '👨🏼‍🦼',
  },
  {
    char: '👨🏽‍🦼',
  },
  {
    char: '👨🏾‍🦼',
  },
  {
    char: '👨🏿‍🦼',
  },
  {
    char: '👩‍🦼',
  },
  {
    char: '👩🏻‍🦼',
  },
  {
    char: '👩🏼‍🦼',
  },
  {
    char: '👩🏽‍🦼',
  },
  {
    char: '👩🏾‍🦼',
  },
  {
    char: '👩🏿‍🦼',
  },
  {
    char: '🧑‍🦽',
  },
  {
    char: '🧑🏻‍🦽',
  },
  {
    char: '🧑🏼‍🦽',
  },
  {
    char: '🧑🏽‍🦽',
  },
  {
    char: '🧑🏾‍🦽',
  },
  {
    char: '🧑🏿‍🦽',
  },
  {
    char: '👨‍🦽',
  },
  {
    char: '👨🏻‍🦽',
  },
  {
    char: '👨🏼‍🦽',
  },
  {
    char: '👨🏽‍🦽',
  },
  {
    char: '👨🏾‍🦽',
  },
  {
    char: '👨🏿‍🦽',
  },
  {
    char: '👩‍🦽',
  },
  {
    char: '👩🏻‍🦽',
  },
  {
    char: '👩🏼‍🦽',
  },
  {
    char: '👩🏽‍🦽',
  },
  {
    char: '👩🏾‍🦽',
  },
  {
    char: '👩🏿‍🦽',
  },
  {
    char: '🏃',
  },
  {
    char: '🏃🏻',
  },
  {
    char: '🏃🏼',
  },
  {
    char: '🏃🏽',
  },
  {
    char: '🏃🏾',
  },
  {
    char: '🏃🏿',
  },
  {
    char: '🏃‍♂️',
  },
  {
    char: '🏃‍♂',
  },
  {
    char: '🏃🏻‍♂️',
  },
  {
    char: '🏃🏻‍♂',
  },
  {
    char: '🏃🏼‍♂️',
  },
  {
    char: '🏃🏼‍♂',
  },
  {
    char: '🏃🏽‍♂️',
  },
  {
    char: '🏃🏽‍♂',
  },
  {
    char: '🏃🏾‍♂️',
  },
  {
    char: '🏃🏾‍♂',
  },
  {
    char: '🏃🏿‍♂️',
  },
  {
    char: '🏃🏿‍♂',
  },
  {
    char: '🏃‍♀️',
  },
  {
    char: '🏃‍♀',
  },
  {
    char: '🏃🏻‍♀️',
  },
  {
    char: '🏃🏻‍♀',
  },
  {
    char: '🏃🏼‍♀️',
  },
  {
    char: '🏃🏼‍♀',
  },
  {
    char: '🏃🏽‍♀️',
  },
  {
    char: '🏃🏽‍♀',
  },
  {
    char: '🏃🏾‍♀️',
  },
  {
    char: '🏃🏾‍♀',
  },
  {
    char: '🏃🏿‍♀️',
  },
  {
    char: '🏃🏿‍♀',
  },
  {
    char: '💃',
  },
  {
    char: '💃🏻',
  },
  {
    char: '💃🏼',
  },
  {
    char: '💃🏽',
  },
  {
    char: '💃🏾',
  },
  {
    char: '💃🏿',
  },
  {
    char: '🕺',
  },
  {
    char: '🕺🏻',
  },
  {
    char: '🕺🏼',
  },
  {
    char: '🕺🏽',
  },
  {
    char: '🕺🏾',
  },
  {
    char: '🕺🏿',
  },
  {
    char: '🕴️',
  },
  {
    char: '🕴',
  },
  {
    char: '🕴🏻',
  },
  {
    char: '🕴🏼',
  },
  {
    char: '🕴🏽',
  },
  {
    char: '🕴🏾',
  },
  {
    char: '🕴🏿',
  },
  {
    char: '👯',
  },
  {
    char: '👯‍♂️',
  },
  {
    char: '👯‍♂',
  },
  {
    char: '👯‍♀️',
  },
  {
    char: '👯‍♀',
  },
  {
    char: '🧖',
  },
  {
    char: '🧖🏻',
  },
  {
    char: '🧖🏼',
  },
  {
    char: '🧖🏽',
  },
  {
    char: '🧖🏾',
  },
  {
    char: '🧖🏿',
  },
  {
    char: '🧖‍♂️',
  },
  {
    char: '🧖‍♂',
  },
  {
    char: '🧖🏻‍♂️',
  },
  {
    char: '🧖🏻‍♂',
  },
  {
    char: '🧖🏼‍♂️',
  },
  {
    char: '🧖🏼‍♂',
  },
  {
    char: '🧖🏽‍♂️',
  },
  {
    char: '🧖🏽‍♂',
  },
  {
    char: '🧖🏾‍♂️',
  },
  {
    char: '🧖🏾‍♂',
  },
  {
    char: '🧖🏿‍♂️',
  },
  {
    char: '🧖🏿‍♂',
  },
  {
    char: '🧖‍♀️',
  },
  {
    char: '🧖‍♀',
  },
  {
    char: '🧖🏻‍♀️',
  },
  {
    char: '🧖🏻‍♀',
  },
  {
    char: '🧖🏼‍♀️',
  },
  {
    char: '🧖🏼‍♀',
  },
  {
    char: '🧖🏽‍♀️',
  },
  {
    char: '🧖🏽‍♀',
  },
  {
    char: '🧖🏾‍♀️',
  },
  {
    char: '🧖🏾‍♀',
  },
  {
    char: '🧖🏿‍♀️',
  },
  {
    char: '🧖🏿‍♀',
  },
  {
    char: '🧗',
  },
  {
    char: '🧗🏻',
  },
  {
    char: '🧗🏼',
  },
  {
    char: '🧗🏽',
  },
  {
    char: '🧗🏾',
  },
  {
    char: '🧗🏿',
  },
  {
    char: '🧗‍♂️',
  },
  {
    char: '🧗‍♂',
  },
  {
    char: '🧗🏻‍♂️',
  },
  {
    char: '🧗🏻‍♂',
  },
  {
    char: '🧗🏼‍♂️',
  },
  {
    char: '🧗🏼‍♂',
  },
  {
    char: '🧗🏽‍♂️',
  },
  {
    char: '🧗🏽‍♂',
  },
  {
    char: '🧗🏾‍♂️',
  },
  {
    char: '🧗🏾‍♂',
  },
  {
    char: '🧗🏿‍♂️',
  },
  {
    char: '🧗🏿‍♂',
  },
  {
    char: '🧗‍♀️',
  },
  {
    char: '🧗‍♀',
  },
  {
    char: '🧗🏻‍♀️',
  },
  {
    char: '🧗🏻‍♀',
  },
  {
    char: '🧗🏼‍♀️',
  },
  {
    char: '🧗🏼‍♀',
  },
  {
    char: '🧗🏽‍♀️',
  },
  {
    char: '🧗🏽‍♀',
  },
  {
    char: '🧗🏾‍♀️',
  },
  {
    char: '🧗🏾‍♀',
  },
  {
    char: '🧗🏿‍♀️',
  },
  {
    char: '🧗🏿‍♀',
  },
  {
    char: '🤺',
  },
  {
    char: '🏇',
  },
  {
    char: '🏇🏻',
  },
  {
    char: '🏇🏼',
  },
  {
    char: '🏇🏽',
  },
  {
    char: '🏇🏾',
  },
  {
    char: '🏇🏿',
  },
  {
    char: '⛷️',
  },
  {
    char: '⛷',
  },
  {
    char: '🏂',
  },
  {
    char: '🏂🏻',
  },
  {
    char: '🏂🏼',
  },
  {
    char: '🏂🏽',
  },
  {
    char: '🏂🏾',
  },
  {
    char: '🏂🏿',
  },
  {
    char: '🏌️',
  },
  {
    char: '🏌',
  },
  {
    char: '🏌🏻',
  },
  {
    char: '🏌🏼',
  },
  {
    char: '🏌🏽',
  },
  {
    char: '🏌🏾',
  },
  {
    char: '🏌🏿',
  },
  {
    char: '🏌️‍♂️',
  },
  {
    char: '🏌‍♂️',
  },
  {
    char: '🏌️‍♂',
  },
  {
    char: '🏌‍♂',
  },
  {
    char: '🏌🏻‍♂️',
  },
  {
    char: '🏌🏻‍♂',
  },
  {
    char: '🏌🏼‍♂️',
  },
  {
    char: '🏌🏼‍♂',
  },
  {
    char: '🏌🏽‍♂️',
  },
  {
    char: '🏌🏽‍♂',
  },
  {
    char: '🏌🏾‍♂️',
  },
  {
    char: '🏌🏾‍♂',
  },
  {
    char: '🏌🏿‍♂️',
  },
  {
    char: '🏌🏿‍♂',
  },
  {
    char: '🏌️‍♀️',
  },
  {
    char: '🏌‍♀️',
  },
  {
    char: '🏌️‍♀',
  },
  {
    char: '🏌‍♀',
  },
  {
    char: '🏌🏻‍♀️',
  },
  {
    char: '🏌🏻‍♀',
  },
  {
    char: '🏌🏼‍♀️',
  },
  {
    char: '🏌🏼‍♀',
  },
  {
    char: '🏌🏽‍♀️',
  },
  {
    char: '🏌🏽‍♀',
  },
  {
    char: '🏌🏾‍♀️',
  },
  {
    char: '🏌🏾‍♀',
  },
  {
    char: '🏌🏿‍♀️',
  },
  {
    char: '🏌🏿‍♀',
  },
  {
    char: '🏄',
  },
  {
    char: '🏄🏻',
  },
  {
    char: '🏄🏼',
  },
  {
    char: '🏄🏽',
  },
  {
    char: '🏄🏾',
  },
  {
    char: '🏄🏿',
  },
  {
    char: '🏄‍♂️',
  },
  {
    char: '🏄‍♂',
  },
  {
    char: '🏄🏻‍♂️',
  },
  {
    char: '🏄🏻‍♂',
  },
  {
    char: '🏄🏼‍♂️',
  },
  {
    char: '🏄🏼‍♂',
  },
  {
    char: '🏄🏽‍♂️',
  },
  {
    char: '🏄🏽‍♂',
  },
  {
    char: '🏄🏾‍♂️',
  },
  {
    char: '🏄🏾‍♂',
  },
  {
    char: '🏄🏿‍♂️',
  },
  {
    char: '🏄🏿‍♂',
  },
  {
    char: '🏄‍♀️',
  },
  {
    char: '🏄‍♀',
  },
  {
    char: '🏄🏻‍♀️',
  },
  {
    char: '🏄🏻‍♀',
  },
  {
    char: '🏄🏼‍♀️',
  },
  {
    char: '🏄🏼‍♀',
  },
  {
    char: '🏄🏽‍♀️',
  },
  {
    char: '🏄🏽‍♀',
  },
  {
    char: '🏄🏾‍♀️',
  },
  {
    char: '🏄🏾‍♀',
  },
  {
    char: '🏄🏿‍♀️',
  },
  {
    char: '🏄🏿‍♀',
  },
  {
    char: '🚣',
  },
  {
    char: '🚣🏻',
  },
  {
    char: '🚣🏼',
  },
  {
    char: '🚣🏽',
  },
  {
    char: '🚣🏾',
  },
  {
    char: '🚣🏿',
  },
  {
    char: '🚣‍♂️',
  },
  {
    char: '🚣‍♂',
  },
  {
    char: '🚣🏻‍♂️',
  },
  {
    char: '🚣🏻‍♂',
  },
  {
    char: '🚣🏼‍♂️',
  },
  {
    char: '🚣🏼‍♂',
  },
  {
    char: '🚣🏽‍♂️',
  },
  {
    char: '🚣🏽‍♂',
  },
  {
    char: '🚣🏾‍♂️',
  },
  {
    char: '🚣🏾‍♂',
  },
  {
    char: '🚣🏿‍♂️',
  },
  {
    char: '🚣🏿‍♂',
  },
  {
    char: '🚣‍♀️',
  },
  {
    char: '🚣‍♀',
  },
  {
    char: '🚣🏻‍♀️',
  },
  {
    char: '🚣🏻‍♀',
  },
  {
    char: '🚣🏼‍♀️',
  },
  {
    char: '🚣🏼‍♀',
  },
  {
    char: '🚣🏽‍♀️',
  },
  {
    char: '🚣🏽‍♀',
  },
  {
    char: '🚣🏾‍♀️',
  },
  {
    char: '🚣🏾‍♀',
  },
  {
    char: '🚣🏿‍♀️',
  },
  {
    char: '🚣🏿‍♀',
  },
  {
    char: '🏊',
  },
  {
    char: '🏊🏻',
  },
  {
    char: '🏊🏼',
  },
  {
    char: '🏊🏽',
  },
  {
    char: '🏊🏾',
  },
  {
    char: '🏊🏿',
  },
  {
    char: '🏊‍♂️',
  },
  {
    char: '🏊‍♂',
  },
  {
    char: '🏊🏻‍♂️',
  },
  {
    char: '🏊🏻‍♂',
  },
  {
    char: '🏊🏼‍♂️',
  },
  {
    char: '🏊🏼‍♂',
  },
  {
    char: '🏊🏽‍♂️',
  },
  {
    char: '🏊🏽‍♂',
  },
  {
    char: '🏊🏾‍♂️',
  },
  {
    char: '🏊🏾‍♂',
  },
  {
    char: '🏊🏿‍♂️',
  },
  {
    char: '🏊🏿‍♂',
  },
  {
    char: '🏊‍♀️',
  },
  {
    char: '🏊‍♀',
  },
  {
    char: '🏊🏻‍♀️',
  },
  {
    char: '🏊🏻‍♀',
  },
  {
    char: '🏊🏼‍♀️',
  },
  {
    char: '🏊🏼‍♀',
  },
  {
    char: '🏊🏽‍♀️',
  },
  {
    char: '🏊🏽‍♀',
  },
  {
    char: '🏊🏾‍♀️',
  },
  {
    char: '🏊🏾‍♀',
  },
  {
    char: '🏊🏿‍♀️',
  },
  {
    char: '🏊🏿‍♀',
  },
  {
    char: '⛹️',
  },
  {
    char: '⛹',
  },
  {
    char: '⛹🏻',
  },
  {
    char: '⛹🏼',
  },
  {
    char: '⛹🏽',
  },
  {
    char: '⛹🏾',
  },
  {
    char: '⛹🏿',
  },
  {
    char: '⛹️‍♂️',
  },
  {
    char: '⛹‍♂️',
  },
  {
    char: '⛹️‍♂',
  },
  {
    char: '⛹‍♂',
  },
  {
    char: '⛹🏻‍♂️',
  },
  {
    char: '⛹🏻‍♂',
  },
  {
    char: '⛹🏼‍♂️',
  },
  {
    char: '⛹🏼‍♂',
  },
  {
    char: '⛹🏽‍♂️',
  },
  {
    char: '⛹🏽‍♂',
  },
  {
    char: '⛹🏾‍♂️',
  },
  {
    char: '⛹🏾‍♂',
  },
  {
    char: '⛹🏿‍♂️',
  },
  {
    char: '⛹🏿‍♂',
  },
  {
    char: '⛹️‍♀️',
  },
  {
    char: '⛹‍♀️',
  },
  {
    char: '⛹️‍♀',
  },
  {
    char: '⛹‍♀',
  },
  {
    char: '⛹🏻‍♀️',
  },
  {
    char: '⛹🏻‍♀',
  },
  {
    char: '⛹🏼‍♀️',
  },
  {
    char: '⛹🏼‍♀',
  },
  {
    char: '⛹🏽‍♀️',
  },
  {
    char: '⛹🏽‍♀',
  },
  {
    char: '⛹🏾‍♀️',
  },
  {
    char: '⛹🏾‍♀',
  },
  {
    char: '⛹🏿‍♀️',
  },
  {
    char: '⛹🏿‍♀',
  },
  {
    char: '🏋️',
  },
  {
    char: '🏋',
  },
  {
    char: '🏋🏻',
  },
  {
    char: '🏋🏼',
  },
  {
    char: '🏋🏽',
  },
  {
    char: '🏋🏾',
  },
  {
    char: '🏋🏿',
  },
  {
    char: '🏋️‍♂️',
  },
  {
    char: '🏋‍♂️',
  },
  {
    char: '🏋️‍♂',
  },
  {
    char: '🏋‍♂',
  },
  {
    char: '🏋🏻‍♂️',
  },
  {
    char: '🏋🏻‍♂',
  },
  {
    char: '🏋🏼‍♂️',
  },
  {
    char: '🏋🏼‍♂',
  },
  {
    char: '🏋🏽‍♂️',
  },
  {
    char: '🏋🏽‍♂',
  },
  {
    char: '🏋🏾‍♂️',
  },
  {
    char: '🏋🏾‍♂',
  },
  {
    char: '🏋🏿‍♂️',
  },
  {
    char: '🏋🏿‍♂',
  },
  {
    char: '🏋️‍♀️',
  },
  {
    char: '🏋‍♀️',
  },
  {
    char: '🏋️‍♀',
  },
  {
    char: '🏋‍♀',
  },
  {
    char: '🏋🏻‍♀️',
  },
  {
    char: '🏋🏻‍♀',
  },
  {
    char: '🏋🏼‍♀️',
  },
  {
    char: '🏋🏼‍♀',
  },
  {
    char: '🏋🏽‍♀️',
  },
  {
    char: '🏋🏽‍♀',
  },
  {
    char: '🏋🏾‍♀️',
  },
  {
    char: '🏋🏾‍♀',
  },
  {
    char: '🏋🏿‍♀️',
  },
  {
    char: '🏋🏿‍♀',
  },
  {
    char: '🚴',
  },
  {
    char: '🚴🏻',
  },
  {
    char: '🚴🏼',
  },
  {
    char: '🚴🏽',
  },
  {
    char: '🚴🏾',
  },
  {
    char: '🚴🏿',
  },
  {
    char: '🚴‍♂️',
  },
  {
    char: '🚴‍♂',
  },
  {
    char: '🚴🏻‍♂️',
  },
  {
    char: '🚴🏻‍♂',
  },
  {
    char: '🚴🏼‍♂️',
  },
  {
    char: '🚴🏼‍♂',
  },
  {
    char: '🚴🏽‍♂️',
  },
  {
    char: '🚴🏽‍♂',
  },
  {
    char: '🚴🏾‍♂️',
  },
  {
    char: '🚴🏾‍♂',
  },
  {
    char: '🚴🏿‍♂️',
  },
  {
    char: '🚴🏿‍♂',
  },
  {
    char: '🚴‍♀️',
  },
  {
    char: '🚴‍♀',
  },
  {
    char: '🚴🏻‍♀️',
  },
  {
    char: '🚴🏻‍♀',
  },
  {
    char: '🚴🏼‍♀️',
  },
  {
    char: '🚴🏼‍♀',
  },
  {
    char: '🚴🏽‍♀️',
  },
  {
    char: '🚴🏽‍♀',
  },
  {
    char: '🚴🏾‍♀️',
  },
  {
    char: '🚴🏾‍♀',
  },
  {
    char: '🚴🏿‍♀️',
  },
  {
    char: '🚴🏿‍♀',
  },
  {
    char: '🚵',
  },
  {
    char: '🚵🏻',
  },
  {
    char: '🚵🏼',
  },
  {
    char: '🚵🏽',
  },
  {
    char: '🚵🏾',
  },
  {
    char: '🚵🏿',
  },
  {
    char: '🚵‍♂️',
  },
  {
    char: '🚵‍♂',
  },
  {
    char: '🚵🏻‍♂️',
  },
  {
    char: '🚵🏻‍♂',
  },
  {
    char: '🚵🏼‍♂️',
  },
  {
    char: '🚵🏼‍♂',
  },
  {
    char: '🚵🏽‍♂️',
  },
  {
    char: '🚵🏽‍♂',
  },
  {
    char: '🚵🏾‍♂️',
  },
  {
    char: '🚵🏾‍♂',
  },
  {
    char: '🚵🏿‍♂️',
  },
  {
    char: '🚵🏿‍♂',
  },
  {
    char: '🚵‍♀️',
  },
  {
    char: '🚵‍♀',
  },
  {
    char: '🚵🏻‍♀️',
  },
  {
    char: '🚵🏻‍♀',
  },
  {
    char: '🚵🏼‍♀️',
  },
  {
    char: '🚵🏼‍♀',
  },
  {
    char: '🚵🏽‍♀️',
  },
  {
    char: '🚵🏽‍♀',
  },
  {
    char: '🚵🏾‍♀️',
  },
  {
    char: '🚵🏾‍♀',
  },
  {
    char: '🚵🏿‍♀️',
  },
  {
    char: '🚵🏿‍♀',
  },
  {
    char: '🤸',
  },
  {
    char: '🤸🏻',
  },
  {
    char: '🤸🏼',
  },
  {
    char: '🤸🏽',
  },
  {
    char: '🤸🏾',
  },
  {
    char: '🤸🏿',
  },
  {
    char: '🤸‍♂️',
  },
  {
    char: '🤸‍♂',
  },
  {
    char: '🤸🏻‍♂️',
  },
  {
    char: '🤸🏻‍♂',
  },
  {
    char: '🤸🏼‍♂️',
  },
  {
    char: '🤸🏼‍♂',
  },
  {
    char: '🤸🏽‍♂️',
  },
  {
    char: '🤸🏽‍♂',
  },
  {
    char: '🤸🏾‍♂️',
  },
  {
    char: '🤸🏾‍♂',
  },
  {
    char: '🤸🏿‍♂️',
  },
  {
    char: '🤸🏿‍♂',
  },
  {
    char: '🤸‍♀️',
  },
  {
    char: '🤸‍♀',
  },
  {
    char: '🤸🏻‍♀️',
  },
  {
    char: '🤸🏻‍♀',
  },
  {
    char: '🤸🏼‍♀️',
  },
  {
    char: '🤸🏼‍♀',
  },
  {
    char: '🤸🏽‍♀️',
  },
  {
    char: '🤸🏽‍♀',
  },
  {
    char: '🤸🏾‍♀️',
  },
  {
    char: '🤸🏾‍♀',
  },
  {
    char: '🤸🏿‍♀️',
  },
  {
    char: '🤸🏿‍♀',
  },
  {
    char: '🤼',
  },
  {
    char: '🤼‍♂️',
  },
  {
    char: '🤼‍♂',
  },
  {
    char: '🤼‍♀️',
  },
  {
    char: '🤼‍♀',
  },
  {
    char: '🤽',
  },
  {
    char: '🤽🏻',
  },
  {
    char: '🤽🏼',
  },
  {
    char: '🤽🏽',
  },
  {
    char: '🤽🏾',
  },
  {
    char: '🤽🏿',
  },
  {
    char: '🤽‍♂️',
  },
  {
    char: '🤽‍♂',
  },
  {
    char: '🤽🏻‍♂️',
  },
  {
    char: '🤽🏻‍♂',
  },
  {
    char: '🤽🏼‍♂️',
  },
  {
    char: '🤽🏼‍♂',
  },
  {
    char: '🤽🏽‍♂️',
  },
  {
    char: '🤽🏽‍♂',
  },
  {
    char: '🤽🏾‍♂️',
  },
  {
    char: '🤽🏾‍♂',
  },
  {
    char: '🤽🏿‍♂️',
  },
  {
    char: '🤽🏿‍♂',
  },
  {
    char: '🤽‍♀️',
  },
  {
    char: '🤽‍♀',
  },
  {
    char: '🤽🏻‍♀️',
  },
  {
    char: '🤽🏻‍♀',
  },
  {
    char: '🤽🏼‍♀️',
  },
  {
    char: '🤽🏼‍♀',
  },
  {
    char: '🤽🏽‍♀️',
  },
  {
    char: '🤽🏽‍♀',
  },
  {
    char: '🤽🏾‍♀️',
  },
  {
    char: '🤽🏾‍♀',
  },
  {
    char: '🤽🏿‍♀️',
  },
  {
    char: '🤽🏿‍♀',
  },
  {
    char: '🤾',
  },
  {
    char: '🤾🏻',
  },
  {
    char: '🤾🏼',
  },
  {
    char: '🤾🏽',
  },
  {
    char: '🤾🏾',
  },
  {
    char: '🤾🏿',
  },
  {
    char: '🤾‍♂️',
  },
  {
    char: '🤾‍♂',
  },
  {
    char: '🤾🏻‍♂️',
  },
  {
    char: '🤾🏻‍♂',
  },
  {
    char: '🤾🏼‍♂️',
  },
  {
    char: '🤾🏼‍♂',
  },
  {
    char: '🤾🏽‍♂️',
  },
  {
    char: '🤾🏽‍♂',
  },
  {
    char: '🤾🏾‍♂️',
  },
  {
    char: '🤾🏾‍♂',
  },
  {
    char: '🤾🏿‍♂️',
  },
  {
    char: '🤾🏿‍♂',
  },
  {
    char: '🤾‍♀️',
  },
  {
    char: '🤾‍♀',
  },
  {
    char: '🤾🏻‍♀️',
  },
  {
    char: '🤾🏻‍♀',
  },
  {
    char: '🤾🏼‍♀️',
  },
  {
    char: '🤾🏼‍♀',
  },
  {
    char: '🤾🏽‍♀️',
  },
  {
    char: '🤾🏽‍♀',
  },
  {
    char: '🤾🏾‍♀️',
  },
  {
    char: '🤾🏾‍♀',
  },
  {
    char: '🤾🏿‍♀️',
  },
  {
    char: '🤾🏿‍♀',
  },
  {
    char: '🤹',
  },
  {
    char: '🤹🏻',
  },
  {
    char: '🤹🏼',
  },
  {
    char: '🤹🏽',
  },
  {
    char: '🤹🏾',
  },
  {
    char: '🤹🏿',
  },
  {
    char: '🤹‍♂️',
  },
  {
    char: '🤹‍♂',
  },
  {
    char: '🤹🏻‍♂️',
  },
  {
    char: '🤹🏻‍♂',
  },
  {
    char: '🤹🏼‍♂️',
  },
  {
    char: '🤹🏼‍♂',
  },
  {
    char: '🤹🏽‍♂️',
  },
  {
    char: '🤹🏽‍♂',
  },
  {
    char: '🤹🏾‍♂️',
  },
  {
    char: '🤹🏾‍♂',
  },
  {
    char: '🤹🏿‍♂️',
  },
  {
    char: '🤹🏿‍♂',
  },
  {
    char: '🤹‍♀️',
  },
  {
    char: '🤹‍♀',
  },
  {
    char: '🤹🏻‍♀️',
  },
  {
    char: '🤹🏻‍♀',
  },
  {
    char: '🤹🏼‍♀️',
  },
  {
    char: '🤹🏼‍♀',
  },
  {
    char: '🤹🏽‍♀️',
  },
  {
    char: '🤹🏽‍♀',
  },
  {
    char: '🤹🏾‍♀️',
  },
  {
    char: '🤹🏾‍♀',
  },
  {
    char: '🤹🏿‍♀️',
  },
  {
    char: '🤹🏿‍♀',
  },
  {
    char: '🧘',
  },
  {
    char: '🧘🏻',
  },
  {
    char: '🧘🏼',
  },
  {
    char: '🧘🏽',
  },
  {
    char: '🧘🏾',
  },
  {
    char: '🧘🏿',
  },
  {
    char: '🧘‍♂️',
  },
  {
    char: '🧘‍♂',
  },
  {
    char: '🧘🏻‍♂️',
  },
  {
    char: '🧘🏻‍♂',
  },
  {
    char: '🧘🏼‍♂️',
  },
  {
    char: '🧘🏼‍♂',
  },
  {
    char: '🧘🏽‍♂️',
  },
  {
    char: '🧘🏽‍♂',
  },
  {
    char: '🧘🏾‍♂️',
  },
  {
    char: '🧘🏾‍♂',
  },
  {
    char: '🧘🏿‍♂️',
  },
  {
    char: '🧘🏿‍♂',
  },
  {
    char: '🧘‍♀️',
  },
  {
    char: '🧘‍♀',
  },
  {
    char: '🧘🏻‍♀️',
  },
  {
    char: '🧘🏻‍♀',
  },
  {
    char: '🧘🏼‍♀️',
  },
  {
    char: '🧘🏼‍♀',
  },
  {
    char: '🧘🏽‍♀️',
  },
  {
    char: '🧘🏽‍♀',
  },
  {
    char: '🧘🏾‍♀️',
  },
  {
    char: '🧘🏾‍♀',
  },
  {
    char: '🧘🏿‍♀️',
  },
  {
    char: '🧘🏿‍♀',
  },
  {
    char: '🛀',
  },
  {
    char: '🛀🏻',
  },
  {
    char: '🛀🏼',
  },
  {
    char: '🛀🏽',
  },
  {
    char: '🛀🏾',
  },
  {
    char: '🛀🏿',
  },
  {
    char: '🛌',
  },
  {
    char: '🛌🏻',
  },
  {
    char: '🛌🏼',
  },
  {
    char: '🛌🏽',
  },
  {
    char: '🛌🏾',
  },
  {
    char: '🛌🏿',
  },
  {
    char: '🧑‍🤝‍🧑',
  },
  {
    char: '🧑🏻‍🤝‍🧑🏻',
  },
  {
    char: '🧑🏻‍🤝‍🧑🏼',
  },
  {
    char: '🧑🏻‍🤝‍🧑🏽',
  },
  {
    char: '🧑🏻‍🤝‍🧑🏾',
  },
  {
    char: '🧑🏻‍🤝‍🧑🏿',
  },
  {
    char: '🧑🏼‍🤝‍🧑🏻',
  },
  {
    char: '🧑🏼‍🤝‍🧑🏼',
  },
  {
    char: '🧑🏼‍🤝‍🧑🏽',
  },
  {
    char: '🧑🏼‍🤝‍🧑🏾',
  },
  {
    char: '🧑🏼‍🤝‍🧑🏿',
  },
  {
    char: '🧑🏽‍🤝‍🧑🏻',
  },
  {
    char: '🧑🏽‍🤝‍🧑🏼',
  },
  {
    char: '🧑🏽‍🤝‍🧑🏽',
  },
  {
    char: '🧑🏽‍🤝‍🧑🏾',
  },
  {
    char: '🧑🏽‍🤝‍🧑🏿',
  },
  {
    char: '🧑🏾‍🤝‍🧑🏻',
  },
  {
    char: '🧑🏾‍🤝‍🧑🏼',
  },
  {
    char: '🧑🏾‍🤝‍🧑🏽',
  },
  {
    char: '🧑🏾‍🤝‍🧑🏾',
  },
  {
    char: '🧑🏾‍🤝‍🧑🏿',
  },
  {
    char: '🧑🏿‍🤝‍🧑🏻',
  },
  {
    char: '🧑🏿‍🤝‍🧑🏼',
  },
  {
    char: '🧑🏿‍🤝‍🧑🏽',
  },
  {
    char: '🧑🏿‍🤝‍🧑🏾',
  },
  {
    char: '🧑🏿‍🤝‍🧑🏿',
  },
  {
    char: '👭',
  },
  {
    char: '👭🏻',
  },
  {
    char: '👩🏻‍🤝‍👩🏼',
  },
  {
    char: '👩🏻‍🤝‍👩🏽',
  },
  {
    char: '👩🏻‍🤝‍👩🏾',
  },
  {
    char: '👩🏻‍🤝‍👩🏿',
  },
  {
    char: '👩🏼‍🤝‍👩🏻',
  },
  {
    char: '👭🏼',
  },
  {
    char: '👩🏼‍🤝‍👩🏽',
  },
  {
    char: '👩🏼‍🤝‍👩🏾',
  },
  {
    char: '👩🏼‍🤝‍👩🏿',
  },
  {
    char: '👩🏽‍🤝‍👩🏻',
  },
  {
    char: '👩🏽‍🤝‍👩🏼',
  },
  {
    char: '👭🏽',
  },
  {
    char: '👩🏽‍🤝‍👩🏾',
  },
  {
    char: '👩🏽‍🤝‍👩🏿',
  },
  {
    char: '👩🏾‍🤝‍👩🏻',
  },
  {
    char: '👩🏾‍🤝‍👩🏼',
  },
  {
    char: '👩🏾‍🤝‍👩🏽',
  },
  {
    char: '👭🏾',
  },
  {
    char: '👩🏾‍🤝‍👩🏿',
  },
  {
    char: '👩🏿‍🤝‍👩🏻',
  },
  {
    char: '👩🏿‍🤝‍👩🏼',
  },
  {
    char: '👩🏿‍🤝‍👩🏽',
  },
  {
    char: '👩🏿‍🤝‍👩🏾',
  },
  {
    char: '👭🏿',
  },
  {
    char: '👫',
  },
  {
    char: '👫🏻',
  },
  {
    char: '👩🏻‍🤝‍👨🏼',
  },
  {
    char: '👩🏻‍🤝‍👨🏽',
  },
  {
    char: '👩🏻‍🤝‍👨🏾',
  },
  {
    char: '👩🏻‍🤝‍👨🏿',
  },
  {
    char: '👩🏼‍🤝‍👨🏻',
  },
  {
    char: '👫🏼',
  },
  {
    char: '👩🏼‍🤝‍👨🏽',
  },
  {
    char: '👩🏼‍🤝‍👨🏾',
  },
  {
    char: '👩🏼‍🤝‍👨🏿',
  },
  {
    char: '👩🏽‍🤝‍👨🏻',
  },
  {
    char: '👩🏽‍🤝‍👨🏼',
  },
  {
    char: '👫🏽',
  },
  {
    char: '👩🏽‍🤝‍👨🏾',
  },
  {
    char: '👩🏽‍🤝‍👨🏿',
  },
  {
    char: '👩🏾‍🤝‍👨🏻',
  },
  {
    char: '👩🏾‍🤝‍👨🏼',
  },
  {
    char: '👩🏾‍🤝‍👨🏽',
  },
  {
    char: '👫🏾',
  },
  {
    char: '👩🏾‍🤝‍👨🏿',
  },
  {
    char: '👩🏿‍🤝‍👨🏻',
  },
  {
    char: '👩🏿‍🤝‍👨🏼',
  },
  {
    char: '👩🏿‍🤝‍👨🏽',
  },
  {
    char: '👩🏿‍🤝‍👨🏾',
  },
  {
    char: '👫🏿',
  },
  {
    char: '👬',
  },
  {
    char: '👬🏻',
  },
  {
    char: '👨🏻‍🤝‍👨🏼',
  },
  {
    char: '👨🏻‍🤝‍👨🏽',
  },
  {
    char: '👨🏻‍🤝‍👨🏾',
  },
  {
    char: '👨🏻‍🤝‍👨🏿',
  },
  {
    char: '👨🏼‍🤝‍👨🏻',
  },
  {
    char: '👬🏼',
  },
  {
    char: '👨🏼‍🤝‍👨🏽',
  },
  {
    char: '👨🏼‍🤝‍👨🏾',
  },
  {
    char: '👨🏼‍🤝‍👨🏿',
  },
  {
    char: '👨🏽‍🤝‍👨🏻',
  },
  {
    char: '👨🏽‍🤝‍👨🏼',
  },
  {
    char: '👬🏽',
  },
  {
    char: '👨🏽‍🤝‍👨🏾',
  },
  {
    char: '👨🏽‍🤝‍👨🏿',
  },
  {
    char: '👨🏾‍🤝‍👨🏻',
  },
  {
    char: '👨🏾‍🤝‍👨🏼',
  },
  {
    char: '👨🏾‍🤝‍👨🏽',
  },
  {
    char: '👬🏾',
  },
  {
    char: '👨🏾‍🤝‍👨🏿',
  },
  {
    char: '👨🏿‍🤝‍👨🏻',
  },
  {
    char: '👨🏿‍🤝‍👨🏼',
  },
  {
    char: '👨🏿‍🤝‍👨🏽',
  },
  {
    char: '👨🏿‍🤝‍👨🏾',
  },
  {
    char: '👬🏿',
  },
  {
    char: '💏',
  },
  {
    char: '💏🏻',
  },
  {
    char: '💏🏼',
  },
  {
    char: '💏🏽',
  },
  {
    char: '💏🏾',
  },
  {
    char: '💏🏿',
  },
  {
    char: '🧑🏻‍❤️‍💋‍🧑🏼',
  },
  {
    char: '🧑🏻‍❤‍💋‍🧑🏼',
  },
  {
    char: '🧑🏻‍❤️‍💋‍🧑🏽',
  },
  {
    char: '🧑🏻‍❤‍💋‍🧑🏽',
  },
  {
    char: '🧑🏻‍❤️‍💋‍🧑🏾',
  },
  {
    char: '🧑🏻‍❤‍💋‍🧑🏾',
  },
  {
    char: '🧑🏻‍❤️‍💋‍🧑🏿',
  },
  {
    char: '🧑🏻‍❤‍💋‍🧑🏿',
  },
  {
    char: '🧑🏼‍❤️‍💋‍🧑🏻',
  },
  {
    char: '🧑🏼‍❤‍💋‍🧑🏻',
  },
  {
    char: '🧑🏼‍❤️‍💋‍🧑🏽',
  },
  {
    char: '🧑🏼‍❤‍💋‍🧑🏽',
  },
  {
    char: '🧑🏼‍❤️‍💋‍🧑🏾',
  },
  {
    char: '🧑🏼‍❤‍💋‍🧑🏾',
  },
  {
    char: '🧑🏼‍❤️‍💋‍🧑🏿',
  },
  {
    char: '🧑🏼‍❤‍💋‍🧑🏿',
  },
  {
    char: '🧑🏽‍❤️‍💋‍🧑🏻',
  },
  {
    char: '🧑🏽‍❤‍💋‍🧑🏻',
  },
  {
    char: '🧑🏽‍❤️‍💋‍🧑🏼',
  },
  {
    char: '🧑🏽‍❤‍💋‍🧑🏼',
  },
  {
    char: '🧑🏽‍❤️‍💋‍🧑🏾',
  },
  {
    char: '🧑🏽‍❤‍💋‍🧑🏾',
  },
  {
    char: '🧑🏽‍❤️‍💋‍🧑🏿',
  },
  {
    char: '🧑🏽‍❤‍💋‍🧑🏿',
  },
  {
    char: '🧑🏾‍❤️‍💋‍🧑🏻',
  },
  {
    char: '🧑🏾‍❤‍💋‍🧑🏻',
  },
  {
    char: '🧑🏾‍❤️‍💋‍🧑🏼',
  },
  {
    char: '🧑🏾‍❤‍💋‍🧑🏼',
  },
  {
    char: '🧑🏾‍❤️‍💋‍🧑🏽',
  },
  {
    char: '🧑🏾‍❤‍💋‍🧑🏽',
  },
  {
    char: '🧑🏾‍❤️‍💋‍🧑🏿',
  },
  {
    char: '🧑🏾‍❤‍💋‍🧑🏿',
  },
  {
    char: '🧑🏿‍❤️‍💋‍🧑🏻',
  },
  {
    char: '🧑🏿‍❤‍💋‍🧑🏻',
  },
  {
    char: '🧑🏿‍❤️‍💋‍🧑🏼',
  },
  {
    char: '🧑🏿‍❤‍💋‍🧑🏼',
  },
  {
    char: '🧑🏿‍❤️‍💋‍🧑🏽',
  },
  {
    char: '🧑🏿‍❤‍💋‍🧑🏽',
  },
  {
    char: '🧑🏿‍❤️‍💋‍🧑🏾',
  },
  {
    char: '🧑🏿‍❤‍💋‍🧑🏾',
  },
  {
    char: '👩‍❤️‍💋‍👨',
  },
  {
    char: '👩‍❤‍💋‍👨',
  },
  {
    char: '👩🏻‍❤️‍💋‍👨🏻',
  },
  {
    char: '👩🏻‍❤‍💋‍👨🏻',
  },
  {
    char: '👩🏻‍❤️‍💋‍👨🏼',
  },
  {
    char: '👩🏻‍❤‍💋‍👨🏼',
  },
  {
    char: '👩🏻‍❤️‍💋‍👨🏽',
  },
  {
    char: '👩🏻‍❤‍💋‍👨🏽',
  },
  {
    char: '👩🏻‍❤️‍💋‍👨🏾',
  },
  {
    char: '👩🏻‍❤‍💋‍👨🏾',
  },
  {
    char: '👩🏻‍❤️‍💋‍👨🏿',
  },
  {
    char: '👩🏻‍❤‍💋‍👨🏿',
  },
  {
    char: '👩🏼‍❤️‍💋‍👨🏻',
  },
  {
    char: '👩🏼‍❤‍💋‍👨🏻',
  },
  {
    char: '👩🏼‍❤️‍💋‍👨🏼',
  },
  {
    char: '👩🏼‍❤‍💋‍👨🏼',
  },
  {
    char: '👩🏼‍❤️‍💋‍👨🏽',
  },
  {
    char: '👩🏼‍❤‍💋‍👨🏽',
  },
  {
    char: '👩🏼‍❤️‍💋‍👨🏾',
  },
  {
    char: '👩🏼‍❤‍💋‍👨🏾',
  },
  {
    char: '👩🏼‍❤️‍💋‍👨🏿',
  },
  {
    char: '👩🏼‍❤‍💋‍👨🏿',
  },
  {
    char: '👩🏽‍❤️‍💋‍👨🏻',
  },
  {
    char: '👩🏽‍❤‍💋‍👨🏻',
  },
  {
    char: '👩🏽‍❤️‍💋‍👨🏼',
  },
  {
    char: '👩🏽‍❤‍💋‍👨🏼',
  },
  {
    char: '👩🏽‍❤️‍💋‍👨🏽',
  },
  {
    char: '👩🏽‍❤‍💋‍👨🏽',
  },
  {
    char: '👩🏽‍❤️‍💋‍👨🏾',
  },
  {
    char: '👩🏽‍❤‍💋‍👨🏾',
  },
  {
    char: '👩🏽‍❤️‍💋‍👨🏿',
  },
  {
    char: '👩🏽‍❤‍💋‍👨🏿',
  },
  {
    char: '👩🏾‍❤️‍💋‍👨🏻',
  },
  {
    char: '👩🏾‍❤‍💋‍👨🏻',
  },
  {
    char: '👩🏾‍❤️‍💋‍👨🏼',
  },
  {
    char: '👩🏾‍❤‍💋‍👨🏼',
  },
  {
    char: '👩🏾‍❤️‍💋‍👨🏽',
  },
  {
    char: '👩🏾‍❤‍💋‍👨🏽',
  },
  {
    char: '👩🏾‍❤️‍💋‍👨🏾',
  },
  {
    char: '👩🏾‍❤‍💋‍👨🏾',
  },
  {
    char: '👩🏾‍❤️‍💋‍👨🏿',
  },
  {
    char: '👩🏾‍❤‍💋‍👨🏿',
  },
  {
    char: '👩🏿‍❤️‍💋‍👨🏻',
  },
  {
    char: '👩🏿‍❤‍💋‍👨🏻',
  },
  {
    char: '👩🏿‍❤️‍💋‍👨🏼',
  },
  {
    char: '👩🏿‍❤‍💋‍👨🏼',
  },
  {
    char: '👩🏿‍❤️‍💋‍👨🏽',
  },
  {
    char: '👩🏿‍❤‍💋‍👨🏽',
  },
  {
    char: '👩🏿‍❤️‍💋‍👨🏾',
  },
  {
    char: '👩🏿‍❤‍💋‍👨🏾',
  },
  {
    char: '👩🏿‍❤️‍💋‍👨🏿',
  },
  {
    char: '👩🏿‍❤‍💋‍👨🏿',
  },
  {
    char: '👨‍❤️‍💋‍👨',
  },
  {
    char: '👨‍❤‍💋‍👨',
  },
  {
    char: '👨🏻‍❤️‍💋‍👨🏻',
  },
  {
    char: '👨🏻‍❤‍💋‍👨🏻',
  },
  {
    char: '👨🏻‍❤️‍💋‍👨🏼',
  },
  {
    char: '👨🏻‍❤‍💋‍👨🏼',
  },
  {
    char: '👨🏻‍❤️‍💋‍👨🏽',
  },
  {
    char: '👨🏻‍❤‍💋‍👨🏽',
  },
  {
    char: '👨🏻‍❤️‍💋‍👨🏾',
  },
  {
    char: '👨🏻‍❤‍💋‍👨🏾',
  },
  {
    char: '👨🏻‍❤️‍💋‍👨🏿',
  },
  {
    char: '👨🏻‍❤‍💋‍👨🏿',
  },
  {
    char: '👨🏼‍❤️‍💋‍👨🏻',
  },
  {
    char: '👨🏼‍❤‍💋‍👨🏻',
  },
  {
    char: '👨🏼‍❤️‍💋‍👨🏼',
  },
  {
    char: '👨🏼‍❤‍💋‍👨🏼',
  },
  {
    char: '👨🏼‍❤️‍💋‍👨🏽',
  },
  {
    char: '👨🏼‍❤‍💋‍👨🏽',
  },
  {
    char: '👨🏼‍❤️‍💋‍👨🏾',
  },
  {
    char: '👨🏼‍❤‍💋‍👨🏾',
  },
  {
    char: '👨🏼‍❤️‍💋‍👨🏿',
  },
  {
    char: '👨🏼‍❤‍💋‍👨🏿',
  },
  {
    char: '👨🏽‍❤️‍💋‍👨🏻',
  },
  {
    char: '👨🏽‍❤‍💋‍👨🏻',
  },
  {
    char: '👨🏽‍❤️‍💋‍👨🏼',
  },
  {
    char: '👨🏽‍❤‍💋‍👨🏼',
  },
  {
    char: '👨🏽‍❤️‍💋‍👨🏽',
  },
  {
    char: '👨🏽‍❤‍💋‍👨🏽',
  },
  {
    char: '👨🏽‍❤️‍💋‍👨🏾',
  },
  {
    char: '👨🏽‍❤‍💋‍👨🏾',
  },
  {
    char: '👨🏽‍❤️‍💋‍👨🏿',
  },
  {
    char: '👨🏽‍❤‍💋‍👨🏿',
  },
  {
    char: '👨🏾‍❤️‍💋‍👨🏻',
  },
  {
    char: '👨🏾‍❤‍💋‍👨🏻',
  },
  {
    char: '👨🏾‍❤️‍💋‍👨🏼',
  },
  {
    char: '👨🏾‍❤‍💋‍👨🏼',
  },
  {
    char: '👨🏾‍❤️‍💋‍👨🏽',
  },
  {
    char: '👨🏾‍❤‍💋‍👨🏽',
  },
  {
    char: '👨🏾‍❤️‍💋‍👨🏾',
  },
  {
    char: '👨🏾‍❤‍💋‍👨🏾',
  },
  {
    char: '👨🏾‍❤️‍💋‍👨🏿',
  },
  {
    char: '👨🏾‍❤‍💋‍👨🏿',
  },
  {
    char: '👨🏿‍❤️‍💋‍👨🏻',
  },
  {
    char: '👨🏿‍❤‍💋‍👨🏻',
  },
  {
    char: '👨🏿‍❤️‍💋‍👨🏼',
  },
  {
    char: '👨🏿‍❤‍💋‍👨🏼',
  },
  {
    char: '👨🏿‍❤️‍💋‍👨🏽',
  },
  {
    char: '👨🏿‍❤‍💋‍👨🏽',
  },
  {
    char: '👨🏿‍❤️‍💋‍👨🏾',
  },
  {
    char: '👨🏿‍❤‍💋‍👨🏾',
  },
  {
    char: '👨🏿‍❤️‍💋‍👨🏿',
  },
  {
    char: '👨🏿‍❤‍💋‍👨🏿',
  },
  {
    char: '👩‍❤️‍💋‍👩',
  },
  {
    char: '👩‍❤‍💋‍👩',
  },
  {
    char: '👩🏻‍❤️‍💋‍👩🏻',
  },
  {
    char: '👩🏻‍❤‍💋‍👩🏻',
  },
  {
    char: '👩🏻‍❤️‍💋‍👩🏼',
  },
  {
    char: '👩🏻‍❤‍💋‍👩🏼',
  },
  {
    char: '👩🏻‍❤️‍💋‍👩🏽',
  },
  {
    char: '👩🏻‍❤‍💋‍👩🏽',
  },
  {
    char: '👩🏻‍❤️‍💋‍👩🏾',
  },
  {
    char: '👩🏻‍❤‍💋‍👩🏾',
  },
  {
    char: '👩🏻‍❤️‍💋‍👩🏿',
  },
  {
    char: '👩🏻‍❤‍💋‍👩🏿',
  },
  {
    char: '👩🏼‍❤️‍💋‍👩🏻',
  },
  {
    char: '👩🏼‍❤‍💋‍👩🏻',
  },
  {
    char: '👩🏼‍❤️‍💋‍👩🏼',
  },
  {
    char: '👩🏼‍❤‍💋‍👩🏼',
  },
  {
    char: '👩🏼‍❤️‍💋‍👩🏽',
  },
  {
    char: '👩🏼‍❤‍💋‍👩🏽',
  },
  {
    char: '👩🏼‍❤️‍💋‍👩🏾',
  },
  {
    char: '👩🏼‍❤‍💋‍👩🏾',
  },
  {
    char: '👩🏼‍❤️‍💋‍👩🏿',
  },
  {
    char: '👩🏼‍❤‍💋‍👩🏿',
  },
  {
    char: '👩🏽‍❤️‍💋‍👩🏻',
  },
  {
    char: '👩🏽‍❤‍💋‍👩🏻',
  },
  {
    char: '👩🏽‍❤️‍💋‍👩🏼',
  },
  {
    char: '👩🏽‍❤‍💋‍👩🏼',
  },
  {
    char: '👩🏽‍❤️‍💋‍👩🏽',
  },
  {
    char: '👩🏽‍❤‍💋‍👩🏽',
  },
  {
    char: '👩🏽‍❤️‍💋‍👩🏾',
  },
  {
    char: '👩🏽‍❤‍💋‍👩🏾',
  },
  {
    char: '👩🏽‍❤️‍💋‍👩🏿',
  },
  {
    char: '👩🏽‍❤‍💋‍👩🏿',
  },
  {
    char: '👩🏾‍❤️‍💋‍👩🏻',
  },
  {
    char: '👩🏾‍❤‍💋‍👩🏻',
  },
  {
    char: '👩🏾‍❤️‍💋‍👩🏼',
  },
  {
    char: '👩🏾‍❤‍💋‍👩🏼',
  },
  {
    char: '👩🏾‍❤️‍💋‍👩🏽',
  },
  {
    char: '👩🏾‍❤‍💋‍👩🏽',
  },
  {
    char: '👩🏾‍❤️‍💋‍👩🏾',
  },
  {
    char: '👩🏾‍❤‍💋‍👩🏾',
  },
  {
    char: '👩🏾‍❤️‍💋‍👩🏿',
  },
  {
    char: '👩🏾‍❤‍💋‍👩🏿',
  },
  {
    char: '👩🏿‍❤️‍💋‍👩🏻',
  },
  {
    char: '👩🏿‍❤‍💋‍👩🏻',
  },
  {
    char: '👩🏿‍❤️‍💋‍👩🏼',
  },
  {
    char: '👩🏿‍❤‍💋‍👩🏼',
  },
  {
    char: '👩🏿‍❤️‍💋‍👩🏽',
  },
  {
    char: '👩🏿‍❤‍💋‍👩🏽',
  },
  {
    char: '👩🏿‍❤️‍💋‍👩🏾',
  },
  {
    char: '👩🏿‍❤‍💋‍👩🏾',
  },
  {
    char: '👩🏿‍❤️‍💋‍👩🏿',
  },
  {
    char: '👩🏿‍❤‍💋‍👩🏿',
  },
  {
    char: '💑',
  },
  {
    char: '💑🏻',
  },
  {
    char: '💑🏼',
  },
  {
    char: '💑🏽',
  },
  {
    char: '💑🏾',
  },
  {
    char: '💑🏿',
  },
  {
    char: '🧑🏻‍❤️‍🧑🏼',
  },
  {
    char: '🧑🏻‍❤‍🧑🏼',
  },
  {
    char: '🧑🏻‍❤️‍🧑🏽',
  },
  {
    char: '🧑🏻‍❤‍🧑🏽',
  },
  {
    char: '🧑🏻‍❤️‍🧑🏾',
  },
  {
    char: '🧑🏻‍❤‍🧑🏾',
  },
  {
    char: '🧑🏻‍❤️‍🧑🏿',
  },
  {
    char: '🧑🏻‍❤‍🧑🏿',
  },
  {
    char: '🧑🏼‍❤️‍🧑🏻',
  },
  {
    char: '🧑🏼‍❤‍🧑🏻',
  },
  {
    char: '🧑🏼‍❤️‍🧑🏽',
  },
  {
    char: '🧑🏼‍❤‍🧑🏽',
  },
  {
    char: '🧑🏼‍❤️‍🧑🏾',
  },
  {
    char: '🧑🏼‍❤‍🧑🏾',
  },
  {
    char: '🧑🏼‍❤️‍🧑🏿',
  },
  {
    char: '🧑🏼‍❤‍🧑🏿',
  },
  {
    char: '🧑🏽‍❤️‍🧑🏻',
  },
  {
    char: '🧑🏽‍❤‍🧑🏻',
  },
  {
    char: '🧑🏽‍❤️‍🧑🏼',
  },
  {
    char: '🧑🏽‍❤‍🧑🏼',
  },
  {
    char: '🧑🏽‍❤️‍🧑🏾',
  },
  {
    char: '🧑🏽‍❤‍🧑🏾',
  },
  {
    char: '🧑🏽‍❤️‍🧑🏿',
  },
  {
    char: '🧑🏽‍❤‍🧑🏿',
  },
  {
    char: '🧑🏾‍❤️‍🧑🏻',
  },
  {
    char: '🧑🏾‍❤‍🧑🏻',
  },
  {
    char: '🧑🏾‍❤️‍🧑🏼',
  },
  {
    char: '🧑🏾‍❤‍🧑🏼',
  },
  {
    char: '🧑🏾‍❤️‍🧑🏽',
  },
  {
    char: '🧑🏾‍❤‍🧑🏽',
  },
  {
    char: '🧑🏾‍❤️‍🧑🏿',
  },
  {
    char: '🧑🏾‍❤‍🧑🏿',
  },
  {
    char: '🧑🏿‍❤️‍🧑🏻',
  },
  {
    char: '🧑🏿‍❤‍🧑🏻',
  },
  {
    char: '🧑🏿‍❤️‍🧑🏼',
  },
  {
    char: '🧑🏿‍❤‍🧑🏼',
  },
  {
    char: '🧑🏿‍❤️‍🧑🏽',
  },
  {
    char: '🧑🏿‍❤‍🧑🏽',
  },
  {
    char: '🧑🏿‍❤️‍🧑🏾',
  },
  {
    char: '🧑🏿‍❤‍🧑🏾',
  },
  {
    char: '👩‍❤️‍👨',
  },
  {
    char: '👩‍❤‍👨',
  },
  {
    char: '👩🏻‍❤️‍👨🏻',
  },
  {
    char: '👩🏻‍❤‍👨🏻',
  },
  {
    char: '👩🏻‍❤️‍👨🏼',
  },
  {
    char: '👩🏻‍❤‍👨🏼',
  },
  {
    char: '👩🏻‍❤️‍👨🏽',
  },
  {
    char: '👩🏻‍❤‍👨🏽',
  },
  {
    char: '👩🏻‍❤️‍👨🏾',
  },
  {
    char: '👩🏻‍❤‍👨🏾',
  },
  {
    char: '👩🏻‍❤️‍👨🏿',
  },
  {
    char: '👩🏻‍❤‍👨🏿',
  },
  {
    char: '👩🏼‍❤️‍👨🏻',
  },
  {
    char: '👩🏼‍❤‍👨🏻',
  },
  {
    char: '👩🏼‍❤️‍👨🏼',
  },
  {
    char: '👩🏼‍❤‍👨🏼',
  },
  {
    char: '👩🏼‍❤️‍👨🏽',
  },
  {
    char: '👩🏼‍❤‍👨🏽',
  },
  {
    char: '👩🏼‍❤️‍👨🏾',
  },
  {
    char: '👩🏼‍❤‍👨🏾',
  },
  {
    char: '👩🏼‍❤️‍👨🏿',
  },
  {
    char: '👩🏼‍❤‍👨🏿',
  },
  {
    char: '👩🏽‍❤️‍👨🏻',
  },
  {
    char: '👩🏽‍❤‍👨🏻',
  },
  {
    char: '👩🏽‍❤️‍👨🏼',
  },
  {
    char: '👩🏽‍❤‍👨🏼',
  },
  {
    char: '👩🏽‍❤️‍👨🏽',
  },
  {
    char: '👩🏽‍❤‍👨🏽',
  },
  {
    char: '👩🏽‍❤️‍👨🏾',
  },
  {
    char: '👩🏽‍❤‍👨🏾',
  },
  {
    char: '👩🏽‍❤️‍👨🏿',
  },
  {
    char: '👩🏽‍❤‍👨🏿',
  },
  {
    char: '👩🏾‍❤️‍👨🏻',
  },
  {
    char: '👩🏾‍❤‍👨🏻',
  },
  {
    char: '👩🏾‍❤️‍👨🏼',
  },
  {
    char: '👩🏾‍❤‍👨🏼',
  },
  {
    char: '👩🏾‍❤️‍👨🏽',
  },
  {
    char: '👩🏾‍❤‍👨🏽',
  },
  {
    char: '👩🏾‍❤️‍👨🏾',
  },
  {
    char: '👩🏾‍❤‍👨🏾',
  },
  {
    char: '👩🏾‍❤️‍👨🏿',
  },
  {
    char: '👩🏾‍❤‍👨🏿',
  },
  {
    char: '👩🏿‍❤️‍👨🏻',
  },
  {
    char: '👩🏿‍❤‍👨🏻',
  },
  {
    char: '👩🏿‍❤️‍👨🏼',
  },
  {
    char: '👩🏿‍❤‍👨🏼',
  },
  {
    char: '👩🏿‍❤️‍👨🏽',
  },
  {
    char: '👩🏿‍❤‍👨🏽',
  },
  {
    char: '👩🏿‍❤️‍👨🏾',
  },
  {
    char: '👩🏿‍❤‍👨🏾',
  },
  {
    char: '👩🏿‍❤️‍👨🏿',
  },
  {
    char: '👩🏿‍❤‍👨🏿',
  },
  {
    char: '👨‍❤️‍👨',
  },
  {
    char: '👨‍❤‍👨',
  },
  {
    char: '👨🏻‍❤️‍👨🏻',
  },
  {
    char: '👨🏻‍❤‍👨🏻',
  },
  {
    char: '👨🏻‍❤️‍👨🏼',
  },
  {
    char: '👨🏻‍❤‍👨🏼',
  },
  {
    char: '👨🏻‍❤️‍👨🏽',
  },
  {
    char: '👨🏻‍❤‍👨🏽',
  },
  {
    char: '👨🏻‍❤️‍👨🏾',
  },
  {
    char: '👨🏻‍❤‍👨🏾',
  },
  {
    char: '👨🏻‍❤️‍👨🏿',
  },
  {
    char: '👨🏻‍❤‍👨🏿',
  },
  {
    char: '👨🏼‍❤️‍👨🏻',
  },
  {
    char: '👨🏼‍❤‍👨🏻',
  },
  {
    char: '👨🏼‍❤️‍👨🏼',
  },
  {
    char: '👨🏼‍❤‍👨🏼',
  },
  {
    char: '👨🏼‍❤️‍👨🏽',
  },
  {
    char: '👨🏼‍❤‍👨🏽',
  },
  {
    char: '👨🏼‍❤️‍👨🏾',
  },
  {
    char: '👨🏼‍❤‍👨🏾',
  },
  {
    char: '👨🏼‍❤️‍👨🏿',
  },
  {
    char: '👨🏼‍❤‍👨🏿',
  },
  {
    char: '👨🏽‍❤️‍👨🏻',
  },
  {
    char: '👨🏽‍❤‍👨🏻',
  },
  {
    char: '👨🏽‍❤️‍👨🏼',
  },
  {
    char: '👨🏽‍❤‍👨🏼',
  },
  {
    char: '👨🏽‍❤️‍👨🏽',
  },
  {
    char: '👨🏽‍❤‍👨🏽',
  },
  {
    char: '👨🏽‍❤️‍👨🏾',
  },
  {
    char: '👨🏽‍❤‍👨🏾',
  },
  {
    char: '👨🏽‍❤️‍👨🏿',
  },
  {
    char: '👨🏽‍❤‍👨🏿',
  },
  {
    char: '👨🏾‍❤️‍👨🏻',
  },
  {
    char: '👨🏾‍❤‍👨🏻',
  },
  {
    char: '👨🏾‍❤️‍👨🏼',
  },
  {
    char: '👨🏾‍❤‍👨🏼',
  },
  {
    char: '👨🏾‍❤️‍👨🏽',
  },
  {
    char: '👨🏾‍❤‍👨🏽',
  },
  {
    char: '👨🏾‍❤️‍👨🏾',
  },
  {
    char: '👨🏾‍❤‍👨🏾',
  },
  {
    char: '👨🏾‍❤️‍👨🏿',
  },
  {
    char: '👨🏾‍❤‍👨🏿',
  },
  {
    char: '👨🏿‍❤️‍👨🏻',
  },
  {
    char: '👨🏿‍❤‍👨🏻',
  },
  {
    char: '👨🏿‍❤️‍👨🏼',
  },
  {
    char: '👨🏿‍❤‍👨🏼',
  },
  {
    char: '👨🏿‍❤️‍👨🏽',
  },
  {
    char: '👨🏿‍❤‍👨🏽',
  },
  {
    char: '👨🏿‍❤️‍👨🏾',
  },
  {
    char: '👨🏿‍❤‍👨🏾',
  },
  {
    char: '👨🏿‍❤️‍👨🏿',
  },
  {
    char: '👨🏿‍❤‍👨🏿',
  },
  {
    char: '👩‍❤️‍👩',
  },
  {
    char: '👩‍❤‍👩',
  },
  {
    char: '👩🏻‍❤️‍👩🏻',
  },
  {
    char: '👩🏻‍❤‍👩🏻',
  },
  {
    char: '👩🏻‍❤️‍👩🏼',
  },
  {
    char: '👩🏻‍❤‍👩🏼',
  },
  {
    char: '👩🏻‍❤️‍👩🏽',
  },
  {
    char: '👩🏻‍❤‍👩🏽',
  },
  {
    char: '👩🏻‍❤️‍👩🏾',
  },
  {
    char: '👩🏻‍❤‍👩🏾',
  },
  {
    char: '👩🏻‍❤️‍👩🏿',
  },
  {
    char: '👩🏻‍❤‍👩🏿',
  },
  {
    char: '👩🏼‍❤️‍👩🏻',
  },
  {
    char: '👩🏼‍❤‍👩🏻',
  },
  {
    char: '👩🏼‍❤️‍👩🏼',
  },
  {
    char: '👩🏼‍❤‍👩🏼',
  },
  {
    char: '👩🏼‍❤️‍👩🏽',
  },
  {
    char: '👩🏼‍❤‍👩🏽',
  },
  {
    char: '👩🏼‍❤️‍👩🏾',
  },
  {
    char: '👩🏼‍❤‍👩🏾',
  },
  {
    char: '👩🏼‍❤️‍👩🏿',
  },
  {
    char: '👩🏼‍❤‍👩🏿',
  },
  {
    char: '👩🏽‍❤️‍👩🏻',
  },
  {
    char: '👩🏽‍❤‍👩🏻',
  },
  {
    char: '👩🏽‍❤️‍👩🏼',
  },
  {
    char: '👩🏽‍❤‍👩🏼',
  },
  {
    char: '👩🏽‍❤️‍👩🏽',
  },
  {
    char: '👩🏽‍❤‍👩🏽',
  },
  {
    char: '👩🏽‍❤️‍👩🏾',
  },
  {
    char: '👩🏽‍❤‍👩🏾',
  },
  {
    char: '👩🏽‍❤️‍👩🏿',
  },
  {
    char: '👩🏽‍❤‍👩🏿',
  },
  {
    char: '👩🏾‍❤️‍👩🏻',
  },
  {
    char: '👩🏾‍❤‍👩🏻',
  },
  {
    char: '👩🏾‍❤️‍👩🏼',
  },
  {
    char: '👩🏾‍❤‍👩🏼',
  },
  {
    char: '👩🏾‍❤️‍👩🏽',
  },
  {
    char: '👩🏾‍❤‍👩🏽',
  },
  {
    char: '👩🏾‍❤️‍👩🏾',
  },
  {
    char: '👩🏾‍❤‍👩🏾',
  },
  {
    char: '👩🏾‍❤️‍👩🏿',
  },
  {
    char: '👩🏾‍❤‍👩🏿',
  },
  {
    char: '👩🏿‍❤️‍👩🏻',
  },
  {
    char: '👩🏿‍❤‍👩🏻',
  },
  {
    char: '👩🏿‍❤️‍👩🏼',
  },
  {
    char: '👩🏿‍❤‍👩🏼',
  },
  {
    char: '👩🏿‍❤️‍👩🏽',
  },
  {
    char: '👩🏿‍❤‍👩🏽',
  },
  {
    char: '👩🏿‍❤️‍👩🏾',
  },
  {
    char: '👩🏿‍❤‍👩🏾',
  },
  {
    char: '👩🏿‍❤️‍👩🏿',
  },
  {
    char: '👩🏿‍❤‍👩🏿',
  },
  {
    char: '👪',
  },
  {
    char: '👨‍👩‍👦',
  },
  {
    char: '👨‍👩‍👧',
  },
  {
    char: '👨‍👩‍👧‍👦',
  },
  {
    char: '👨‍👩‍👦‍👦',
  },
  {
    char: '👨‍👩‍👧‍👧',
  },
  {
    char: '👨‍👨‍👦',
  },
  {
    char: '👨‍👨‍👧',
  },
  {
    char: '👨‍👨‍👧‍👦',
  },
  {
    char: '👨‍👨‍👦‍👦',
  },
  {
    char: '👨‍👨‍👧‍👧',
  },
  {
    char: '👩‍👩‍👦',
  },
  {
    char: '👩‍👩‍👧',
  },
  {
    char: '👩‍👩‍👧‍👦',
  },
  {
    char: '👩‍👩‍👦‍👦',
  },
  {
    char: '👩‍👩‍👧‍👧',
  },
  {
    char: '👨‍👦',
  },
  {
    char: '👨‍👦‍👦',
  },
  {
    char: '👨‍👧',
  },
  {
    char: '👨‍👧‍👦',
  },
  {
    char: '👨‍👧‍👧',
  },
  {
    char: '👩‍👦',
  },
  {
    char: '👩‍👦‍👦',
  },
  {
    char: '👩‍👧',
  },
  {
    char: '👩‍👧‍👦',
  },
  {
    char: '👩‍👧‍👧',
  },
  {
    char: '🗣️',
  },
  {
    char: '🗣',
  },
  {
    char: '👤',
  },
  {
    char: '👥',
  },
  {
    char: '🫂',
  },
  {
    char: '👣',
  },
  {
    char: '🐵',
  },
  {
    char: '🐒',
  },
  {
    char: '🦍',
  },
  {
    char: '🦧',
  },
  {
    char: '🐶',
  },
  {
    char: '🐕',
  },
  {
    char: '🦮',
  },
  {
    char: '🐕‍🦺',
  },
  {
    char: '🐩',
  },
  {
    char: '🐺',
  },
  {
    char: '🦊',
  },
  {
    char: '🦝',
  },
  {
    char: '🐱',
  },
  {
    char: '🐈',
  },
  {
    char: '🐈‍⬛',
  },
  {
    char: '🦁',
  },
  {
    char: '🐯',
  },
  {
    char: '🐅',
  },
  {
    char: '🐆',
  },
  {
    char: '🐴',
  },
  {
    char: '🐎',
  },
  {
    char: '🦄',
  },
  {
    char: '🦓',
  },
  {
    char: '🦌',
  },
  {
    char: '🦬',
  },
  {
    char: '🐮',
  },
  {
    char: '🐂',
  },
  {
    char: '🐃',
  },
  {
    char: '🐄',
  },
  {
    char: '🐷',
  },
  {
    char: '🐖',
  },
  {
    char: '🐗',
  },
  {
    char: '🐽',
  },
  {
    char: '🐏',
  },
  {
    char: '🐑',
  },
  {
    char: '🐐',
  },
  {
    char: '🐪',
  },
  {
    char: '🐫',
  },
  {
    char: '🦙',
  },
  {
    char: '🦒',
  },
  {
    char: '🐘',
  },
  {
    char: '🦣',
  },
  {
    char: '🦏',
  },
  {
    char: '🦛',
  },
  {
    char: '🐭',
  },
  {
    char: '🐁',
  },
  {
    char: '🐀',
  },
  {
    char: '🐹',
  },
  {
    char: '🐰',
  },
  {
    char: '🐇',
  },
  {
    char: '🐿️',
  },
  {
    char: '🐿',
  },
  {
    char: '🦫',
  },
  {
    char: '🦔',
  },
  {
    char: '🦇',
  },
  {
    char: '🐻',
  },
  {
    char: '🐻‍❄️',
  },
  {
    char: '🐻‍❄',
  },
  {
    char: '🐨',
  },
  {
    char: '🐼',
  },
  {
    char: '🦥',
  },
  {
    char: '🦦',
  },
  {
    char: '🦨',
  },
  {
    char: '🦘',
  },
  {
    char: '🦡',
  },
  {
    char: '🐾',
  },
  {
    char: '🦃',
  },
  {
    char: '🐔',
  },
  {
    char: '🐓',
  },
  {
    char: '🐣',
  },
  {
    char: '🐤',
  },
  {
    char: '🐥',
  },
  {
    char: '🐦',
  },
  {
    char: '🐧',
  },
  {
    char: '🕊️',
  },
  {
    char: '🕊',
  },
  {
    char: '🦅',
  },
  {
    char: '🦆',
  },
  {
    char: '🦢',
  },
  {
    char: '🦉',
  },
  {
    char: '🦤',
  },
  {
    char: '🪶',
  },
  {
    char: '🦩',
  },
  {
    char: '🦚',
  },
  {
    char: '🦜',
  },
  {
    char: '🐸',
  },
  {
    char: '🐊',
  },
  {
    char: '🐢',
  },
  {
    char: '🦎',
  },
  {
    char: '🐍',
  },
  {
    char: '🐲',
  },
  {
    char: '🐉',
  },
  {
    char: '🦕',
  },
  {
    char: '🦖',
  },
  {
    char: '🐳',
  },
  {
    char: '🐋',
  },
  {
    char: '🐬',
  },
  {
    char: '🦭',
  },
  {
    char: '🐟',
  },
  {
    char: '🐠',
  },
  {
    char: '🐡',
  },
  {
    char: '🦈',
  },
  {
    char: '🐙',
  },
  {
    char: '🐚',
  },
  {
    char: '🐌',
  },
  {
    char: '🦋',
  },
  {
    char: '🐛',
  },
  {
    char: '🐜',
  },
  {
    char: '🐝',
  },
  {
    char: '🪲',
  },
  {
    char: '🐞',
  },
  {
    char: '🦗',
  },
  {
    char: '🪳',
  },
  {
    char: '🕷️',
  },
  {
    char: '🕷',
  },
  {
    char: '🕸️',
  },
  {
    char: '🕸',
  },
  {
    char: '🦂',
  },
  {
    char: '🦟',
  },
  {
    char: '🪰',
  },
  {
    char: '🪱',
  },
  {
    char: '🦠',
  },
  {
    char: '💐',
  },
  {
    char: '🌸',
  },
  {
    char: '💮',
  },
  {
    char: '🏵️',
  },
  {
    char: '🏵',
  },
  {
    char: '🌹',
  },
  {
    char: '🥀',
  },
  {
    char: '🌺',
  },
  {
    char: '🌻',
  },
  {
    char: '🌼',
  },
  {
    char: '🌷',
  },
  {
    char: '🌱',
  },
  {
    char: '🪴',
  },
  {
    char: '🌲',
  },
  {
    char: '🌳',
  },
  {
    char: '🌴',
  },
  {
    char: '🌵',
  },
  {
    char: '🌾',
  },
  {
    char: '🌿',
  },
  {
    char: '☘️',
  },
  {
    char: '☘',
  },
  {
    char: '🍀',
  },
  {
    char: '🍁',
  },
  {
    char: '🍂',
  },
  {
    char: '🍃',
  },
  {
    char: '🍇',
  },
  {
    char: '🍈',
  },
  {
    char: '🍉',
  },
  {
    char: '🍊',
  },
  {
    char: '🍋',
  },
  {
    char: '🍌',
  },
  {
    char: '🍍',
  },
  {
    char: '🥭',
  },
  {
    char: '🍎',
  },
  {
    char: '🍏',
  },
  {
    char: '🍐',
  },
  {
    char: '🍑',
  },
  {
    char: '🍒',
  },
  {
    char: '🍓',
  },
  {
    char: '🫐',
  },
  {
    char: '🥝',
  },
  {
    char: '🍅',
  },
  {
    char: '🫒',
  },
  {
    char: '🥥',
  },
  {
    char: '🥑',
  },
  {
    char: '🍆',
  },
  {
    char: '🥔',
  },
  {
    char: '🥕',
  },
  {
    char: '🌽',
  },
  {
    char: '🌶️',
  },
  {
    char: '🌶',
  },
  {
    char: '🫑',
  },
  {
    char: '🥒',
  },
  {
    char: '🥬',
  },
  {
    char: '🥦',
  },
  {
    char: '🧄',
  },
  {
    char: '🧅',
  },
  {
    char: '🍄',
  },
  {
    char: '🥜',
  },
  {
    char: '🌰',
  },
  {
    char: '🍞',
  },
  {
    char: '🥐',
  },
  {
    char: '🥖',
  },
  {
    char: '🫓',
  },
  {
    char: '🥨',
  },
  {
    char: '🥯',
  },
  {
    char: '🥞',
  },
  {
    char: '🧇',
  },
  {
    char: '🧀',
  },
  {
    char: '🍖',
  },
  {
    char: '🍗',
  },
  {
    char: '🥩',
  },
  {
    char: '🥓',
  },
  {
    char: '🍔',
  },
  {
    char: '🍟',
  },
  {
    char: '🍕',
  },
  {
    char: '🌭',
  },
  {
    char: '🥪',
  },
  {
    char: '🌮',
  },
  {
    char: '🌯',
  },
  {
    char: '🫔',
  },
  {
    char: '🥙',
  },
  {
    char: '🧆',
  },
  {
    char: '🥚',
  },
  {
    char: '🍳',
  },
  {
    char: '🥘',
  },
  {
    char: '🍲',
  },
  {
    char: '🫕',
  },
  {
    char: '🥣',
  },
  {
    char: '🥗',
  },
  {
    char: '🍿',
  },
  {
    char: '🧈',
  },
  {
    char: '🧂',
  },
  {
    char: '🥫',
  },
  {
    char: '🍱',
  },
  {
    char: '🍘',
  },
  {
    char: '🍙',
  },
  {
    char: '🍚',
  },
  {
    char: '🍛',
  },
  {
    char: '🍜',
  },
  {
    char: '🍝',
  },
  {
    char: '🍠',
  },
  {
    char: '🍢',
  },
  {
    char: '🍣',
  },
  {
    char: '🍤',
  },
  {
    char: '🍥',
  },
  {
    char: '🥮',
  },
  {
    char: '🍡',
  },
  {
    char: '🥟',
  },
  {
    char: '🥠',
  },
  {
    char: '🥡',
  },
  {
    char: '🦀',
  },
  {
    char: '🦞',
  },
  {
    char: '🦐',
  },
  {
    char: '🦑',
  },
  {
    char: '🦪',
  },
  {
    char: '🍦',
  },
  {
    char: '🍧',
  },
  {
    char: '🍨',
  },
  {
    char: '🍩',
  },
  {
    char: '🍪',
  },
  {
    char: '🎂',
  },
  {
    char: '🍰',
  },
  {
    char: '🧁',
  },
  {
    char: '🥧',
  },
  {
    char: '🍫',
  },
  {
    char: '🍬',
  },
  {
    char: '🍭',
  },
  {
    char: '🍮',
  },
  {
    char: '🍯',
  },
  {
    char: '🍼',
  },
  {
    char: '🥛',
  },
  {
    char: '☕',
  },
  {
    char: '🫖',
  },
  {
    char: '🍵',
  },
  {
    char: '🍶',
  },
  {
    char: '🍾',
  },
  {
    char: '🍷',
  },
  {
    char: '🍸',
  },
  {
    char: '🍹',
  },
  {
    char: '🍺',
  },
  {
    char: '🍻',
  },
  {
    char: '🥂',
  },
  {
    char: '🥃',
  },
  {
    char: '🥤',
  },
  {
    char: '🧋',
  },
  {
    char: '🧃',
  },
  {
    char: '🧉',
  },
  {
    char: '🧊',
  },
  {
    char: '🥢',
  },
  {
    char: '🍽️',
  },
  {
    char: '🍽',
  },
  {
    char: '🍴',
  },
  {
    char: '🥄',
  },
  {
    char: '🔪',
  },
  {
    char: '🏺',
  },
  {
    char: '🌍',
  },
  {
    char: '🌎',
  },
  {
    char: '🌏',
  },
  {
    char: '🌐',
  },
  {
    char: '🗺️',
  },
  {
    char: '🗺',
  },
  {
    char: '🗾',
  },
  {
    char: '🧭',
  },
  {
    char: '🏔️',
  },
  {
    char: '🏔',
  },
  {
    char: '⛰️',
  },
  {
    char: '⛰',
  },
  {
    char: '🌋',
  },
  {
    char: '🗻',
  },
  {
    char: '🏕️',
  },
  {
    char: '🏕',
  },
  {
    char: '🏖️',
  },
  {
    char: '🏖',
  },
  {
    char: '🏜️',
  },
  {
    char: '🏜',
  },
  {
    char: '🏝️',
  },
  {
    char: '🏝',
  },
  {
    char: '🏞️',
  },
  {
    char: '🏞',
  },
  {
    char: '🏟️',
  },
  {
    char: '🏟',
  },
  {
    char: '🏛️',
  },
  {
    char: '🏛',
  },
  {
    char: '🏗️',
  },
  {
    char: '🏗',
  },
  {
    char: '🧱',
  },
  {
    char: '🪨',
  },
  {
    char: '🪵',
  },
  {
    char: '🛖',
  },
  {
    char: '🏘️',
  },
  {
    char: '🏘',
  },
  {
    char: '🏚️',
  },
  {
    char: '🏚',
  },
  {
    char: '🏠',
  },
  {
    char: '🏡',
  },
  {
    char: '🏢',
  },
  {
    char: '🏣',
  },
  {
    char: '🏤',
  },
  {
    char: '🏥',
  },
  {
    char: '🏦',
  },
  {
    char: '🏨',
  },
  {
    char: '🏩',
  },
  {
    char: '🏪',
  },
  {
    char: '🏫',
  },
  {
    char: '🏬',
  },
  {
    char: '🏭',
  },
  {
    char: '🏯',
  },
  {
    char: '🏰',
  },
  {
    char: '💒',
  },
  {
    char: '🗼',
  },
  {
    char: '🗽',
  },
  {
    char: '⛪',
  },
  {
    char: '🕌',
  },
  {
    char: '🛕',
  },
  {
    char: '🕍',
  },
  {
    char: '⛩️',
  },
  {
    char: '⛩',
  },
  {
    char: '🕋',
  },
  {
    char: '⛲',
  },
  {
    char: '⛺',
  },
  {
    char: '🌁',
  },
  {
    char: '🌃',
  },
  {
    char: '🏙️',
  },
  {
    char: '🏙',
  },
  {
    char: '🌄',
  },
  {
    char: '🌅',
  },
  {
    char: '🌆',
  },
  {
    char: '🌇',
  },
  {
    char: '🌉',
  },
  {
    char: '♨️',
  },
  {
    char: '♨',
  },
  {
    char: '🎠',
  },
  {
    char: '🎡',
  },
  {
    char: '🎢',
  },
  {
    char: '💈',
  },
  {
    char: '🎪',
  },
  {
    char: '🚂',
  },
  {
    char: '🚃',
  },
  {
    char: '🚄',
  },
  {
    char: '🚅',
  },
  {
    char: '🚆',
  },
  {
    char: '🚇',
  },
  {
    char: '🚈',
  },
  {
    char: '🚉',
  },
  {
    char: '🚊',
  },
  {
    char: '🚝',
  },
  {
    char: '🚞',
  },
  {
    char: '🚋',
  },
  {
    char: '🚌',
  },
  {
    char: '🚍',
  },
  {
    char: '🚎',
  },
  {
    char: '🚐',
  },
  {
    char: '🚑',
  },
  {
    char: '🚒',
  },
  {
    char: '🚓',
  },
  {
    char: '🚔',
  },
  {
    char: '🚕',
  },
  {
    char: '🚖',
  },
  {
    char: '🚗',
  },
  {
    char: '🚘',
  },
  {
    char: '🚙',
  },
  {
    char: '🛻',
  },
  {
    char: '🚚',
  },
  {
    char: '🚛',
  },
  {
    char: '🚜',
  },
  {
    char: '🏎️',
  },
  {
    char: '🏎',
  },
  {
    char: '🏍️',
  },
  {
    char: '🏍',
  },
  {
    char: '🛵',
  },
  {
    char: '🦽',
  },
  {
    char: '🦼',
  },
  {
    char: '🛺',
  },
  {
    char: '🚲',
  },
  {
    char: '🛴',
  },
  {
    char: '🛹',
  },
  {
    char: '🛼',
  },
  {
    char: '🚏',
  },
  {
    char: '🛣️',
  },
  {
    char: '🛣',
  },
  {
    char: '🛤️',
  },
  {
    char: '🛤',
  },
  {
    char: '🛢️',
  },
  {
    char: '🛢',
  },
  {
    char: '⛽',
  },
  {
    char: '🚨',
  },
  {
    char: '🚥',
  },
  {
    char: '🚦',
  },
  {
    char: '🛑',
  },
  {
    char: '🚧',
  },
  {
    char: '⚓',
  },
  {
    char: '⛵',
  },
  {
    char: '🛶',
  },
  {
    char: '🚤',
  },
  {
    char: '🛳️',
  },
  {
    char: '🛳',
  },
  {
    char: '⛴️',
  },
  {
    char: '⛴',
  },
  {
    char: '🛥️',
  },
  {
    char: '🛥',
  },
  {
    char: '🚢',
  },
  {
    char: '✈️',
  },
  {
    char: '✈',
  },
  {
    char: '🛩️',
  },
  {
    char: '🛩',
  },
  {
    char: '🛫',
  },
  {
    char: '🛬',
  },
  {
    char: '🪂',
  },
  {
    char: '💺',
  },
  {
    char: '🚁',
  },
  {
    char: '🚟',
  },
  {
    char: '🚠',
  },
  {
    char: '🚡',
  },
  {
    char: '🛰️',
  },
  {
    char: '🛰',
  },
  {
    char: '🚀',
  },
  {
    char: '🛸',
  },
  {
    char: '🛎️',
  },
  {
    char: '🛎',
  },
  {
    char: '🧳',
  },
  {
    char: '⌛',
  },
  {
    char: '⏳',
  },
  {
    char: '⌚',
  },
  {
    char: '⏰',
  },
  {
    char: '⏱️',
  },
  {
    char: '⏱',
  },
  {
    char: '⏲️',
  },
  {
    char: '⏲',
  },
  {
    char: '🕰️',
  },
  {
    char: '🕰',
  },
  {
    char: '🕛',
  },
  {
    char: '🕧',
  },
  {
    char: '🕐',
  },
  {
    char: '🕜',
  },
  {
    char: '🕑',
  },
  {
    char: '🕝',
  },
  {
    char: '🕒',
  },
  {
    char: '🕞',
  },
  {
    char: '🕓',
  },
  {
    char: '🕟',
  },
  {
    char: '🕔',
  },
  {
    char: '🕠',
  },
  {
    char: '🕕',
  },
  {
    char: '🕡',
  },
  {
    char: '🕖',
  },
  {
    char: '🕢',
  },
  {
    char: '🕗',
  },
  {
    char: '🕣',
  },
  {
    char: '🕘',
  },
  {
    char: '🕤',
  },
  {
    char: '🕙',
  },
  {
    char: '🕥',
  },
  {
    char: '🕚',
  },
  {
    char: '🕦',
  },
  {
    char: '🌑',
  },
  {
    char: '🌒',
  },
  {
    char: '🌓',
  },
  {
    char: '🌔',
  },
  {
    char: '🌕',
  },
  {
    char: '🌖',
  },
  {
    char: '🌗',
  },
  {
    char: '🌘',
  },
  {
    char: '🌙',
  },
  {
    char: '🌚',
  },
  {
    char: '🌛',
  },
  {
    char: '🌜',
  },
  {
    char: '🌡️',
  },
  {
    char: '🌡',
  },
  {
    char: '☀️',
  },
  {
    char: '☀',
  },
  {
    char: '🌝',
  },
  {
    char: '🌞',
  },
  {
    char: '🪐',
  },
  {
    char: '⭐',
  },
  {
    char: '🌟',
  },
  {
    char: '🌠',
  },
  {
    char: '🌌',
  },
  {
    char: '☁️',
  },
  {
    char: '☁',
  },
  {
    char: '⛅',
  },
  {
    char: '⛈️',
  },
  {
    char: '⛈',
  },
  {
    char: '🌤️',
  },
  {
    char: '🌤',
  },
  {
    char: '🌥️',
  },
  {
    char: '🌥',
  },
  {
    char: '🌦️',
  },
  {
    char: '🌦',
  },
  {
    char: '🌧️',
  },
  {
    char: '🌧',
  },
  {
    char: '🌨️',
  },
  {
    char: '🌨',
  },
  {
    char: '🌩️',
  },
  {
    char: '🌩',
  },
  {
    char: '🌪️',
  },
  {
    char: '🌪',
  },
  {
    char: '🌫️',
  },
  {
    char: '🌫',
  },
  {
    char: '🌬️',
  },
  {
    char: '🌬',
  },
  {
    char: '🌀',
  },
  {
    char: '🌈',
  },
  {
    char: '🌂',
  },
  {
    char: '☂️',
  },
  {
    char: '☂',
  },
  {
    char: '☔',
  },
  {
    char: '⛱️',
  },
  {
    char: '⛱',
  },
  {
    char: '⚡',
  },
  {
    char: '❄️',
  },
  {
    char: '❄',
  },
  {
    char: '☃️',
  },
  {
    char: '☃',
  },
  {
    char: '⛄',
  },
  {
    char: '☄️',
  },
  {
    char: '☄',
  },
  {
    char: '🔥',
  },
  {
    char: '💧',
  },
  {
    char: '🌊',
  },
  {
    char: '🎃',
  },
  {
    char: '🎄',
  },
  {
    char: '🎆',
  },
  {
    char: '🎇',
  },
  {
    char: '🧨',
  },
  {
    char: '✨',
  },
  {
    char: '🎈',
  },
  {
    char: '🎉',
  },
  {
    char: '🎊',
  },
  {
    char: '🎋',
  },
  {
    char: '🎍',
  },
  {
    char: '🎎',
  },
  {
    char: '🎏',
  },
  {
    char: '🎐',
  },
  {
    char: '🎑',
  },
  {
    char: '🧧',
  },
  {
    char: '🎀',
  },
  {
    char: '🎁',
  },
  {
    char: '🎗️',
  },
  {
    char: '🎗',
  },
  {
    char: '🎟️',
  },
  {
    char: '🎟',
  },
  {
    char: '🎫',
  },
  {
    char: '🎖️',
  },
  {
    char: '🎖',
  },
  {
    char: '🏆',
  },
  {
    char: '🏅',
  },
  {
    char: '🥇',
  },
  {
    char: '🥈',
  },
  {
    char: '🥉',
  },
  {
    char: '⚽',
  },
  {
    char: '⚾',
  },
  {
    char: '🥎',
  },
  {
    char: '🏀',
  },
  {
    char: '🏐',
  },
  {
    char: '🏈',
  },
  {
    char: '🏉',
  },
  {
    char: '🎾',
  },
  {
    char: '🥏',
  },
  {
    char: '🎳',
  },
  {
    char: '🏏',
  },
  {
    char: '🏑',
  },
  {
    char: '🏒',
  },
  {
    char: '🥍',
  },
  {
    char: '🏓',
  },
  {
    char: '🏸',
  },
  {
    char: '🥊',
  },
  {
    char: '🥋',
  },
  {
    char: '🥅',
  },
  {
    char: '⛳',
  },
  {
    char: '⛸️',
  },
  {
    char: '⛸',
  },
  {
    char: '🎣',
  },
  {
    char: '🤿',
  },
  {
    char: '🎽',
  },
  {
    char: '🎿',
  },
  {
    char: '🛷',
  },
  {
    char: '🥌',
  },
  {
    char: '🎯',
  },
  {
    char: '🪀',
  },
  {
    char: '🪁',
  },
  {
    char: '🎱',
  },
  {
    char: '🔮',
  },
  {
    char: '🪄',
  },
  {
    char: '🧿',
  },
  {
    char: '🎮',
  },
  {
    char: '🕹️',
  },
  {
    char: '🕹',
  },
  {
    char: '🎰',
  },
  {
    char: '🎲',
  },
  {
    char: '🧩',
  },
  {
    char: '🧸',
  },
  {
    char: '🪅',
  },
  {
    char: '🪆',
  },
  {
    char: '♠️',
  },
  {
    char: '♠',
  },
  {
    char: '♥️',
  },
  {
    char: '♥',
  },
  {
    char: '♦️',
  },
  {
    char: '♦',
  },
  {
    char: '♣️',
  },
  {
    char: '♣',
  },
  {
    char: '♟️',
  },
  {
    char: '♟',
  },
  {
    char: '🃏',
  },
  {
    char: '🀄',
  },
  {
    char: '🎴',
  },
  {
    char: '🎭',
  },
  {
    char: '🖼️',
  },
  {
    char: '🖼',
  },
  {
    char: '🎨',
  },
  {
    char: '🧵',
  },
  {
    char: '🪡',
  },
  {
    char: '🧶',
  },
  {
    char: '🪢',
  },
  {
    char: '👓',
  },
  {
    char: '🕶️',
  },
  {
    char: '🕶',
  },
  {
    char: '🥽',
  },
  {
    char: '🥼',
  },
  {
    char: '🦺',
  },
  {
    char: '👔',
  },
  {
    char: '👕',
  },
  {
    char: '👖',
  },
  {
    char: '🧣',
  },
  {
    char: '🧤',
  },
  {
    char: '🧥',
  },
  {
    char: '🧦',
  },
  {
    char: '👗',
  },
  {
    char: '👘',
  },
  {
    char: '🥻',
  },
  {
    char: '🩱',
  },
  {
    char: '🩲',
  },
  {
    char: '🩳',
  },
  {
    char: '👙',
  },
  {
    char: '👚',
  },
  {
    char: '👛',
  },
  {
    char: '👜',
  },
  {
    char: '👝',
  },
  {
    char: '🛍️',
  },
  {
    char: '🛍',
  },
  {
    char: '🎒',
  },
  {
    char: '🩴',
  },
  {
    char: '👞',
  },
  {
    char: '👟',
  },
  {
    char: '🥾',
  },
  {
    char: '🥿',
  },
  {
    char: '👠',
  },
  {
    char: '👡',
  },
  {
    char: '🩰',
  },
  {
    char: '👢',
  },
  {
    char: '👑',
  },
  {
    char: '👒',
  },
  {
    char: '🎩',
  },
  {
    char: '🎓',
  },
  {
    char: '🧢',
  },
  {
    char: '🪖',
  },
  {
    char: '⛑️',
  },
  {
    char: '⛑',
  },
  {
    char: '📿',
  },
  {
    char: '💄',
  },
  {
    char: '💍',
  },
  {
    char: '💎',
  },
  {
    char: '🔇',
  },
  {
    char: '🔈',
  },
  {
    char: '🔉',
  },
  {
    char: '🔊',
  },
  {
    char: '📢',
  },
  {
    char: '📣',
  },
  {
    char: '📯',
  },
  {
    char: '🔔',
  },
  {
    char: '🔕',
  },
  {
    char: '🎼',
  },
  {
    char: '🎵',
  },
  {
    char: '🎶',
  },
  {
    char: '🎙️',
  },
  {
    char: '🎙',
  },
  {
    char: '🎚️',
  },
  {
    char: '🎚',
  },
  {
    char: '🎛️',
  },
  {
    char: '🎛',
  },
  {
    char: '🎤',
  },
  {
    char: '🎧',
  },
  {
    char: '📻',
  },
  {
    char: '🎷',
  },
  {
    char: '🪗',
  },
  {
    char: '🎸',
  },
  {
    char: '🎹',
  },
  {
    char: '🎺',
  },
  {
    char: '🎻',
  },
  {
    char: '🪕',
  },
  {
    char: '🥁',
  },
  {
    char: '🪘',
  },
  {
    char: '📱',
  },
  {
    char: '📲',
  },
  {
    char: '☎️',
  },
  {
    char: '☎',
  },
  {
    char: '📞',
  },
  {
    char: '📟',
  },
  {
    char: '📠',
  },
  {
    char: '🔋',
  },
  {
    char: '🔌',
  },
  {
    char: '💻',
  },
  {
    char: '🖥️',
  },
  {
    char: '🖥',
  },
  {
    char: '🖨️',
  },
  {
    char: '🖨',
  },
  {
    char: '⌨️',
  },
  {
    char: '⌨',
  },
  {
    char: '🖱️',
  },
  {
    char: '🖱',
  },
  {
    char: '🖲️',
  },
  {
    char: '🖲',
  },
  {
    char: '💽',
  },
  {
    char: '💾',
  },
  {
    char: '💿',
  },
  {
    char: '📀',
  },
  {
    char: '🧮',
  },
  {
    char: '🎥',
  },
  {
    char: '🎞️',
  },
  {
    char: '🎞',
  },
  {
    char: '📽️',
  },
  {
    char: '📽',
  },
  {
    char: '🎬',
  },
  {
    char: '📺',
  },
  {
    char: '📷',
  },
  {
    char: '📸',
  },
  {
    char: '📹',
  },
  {
    char: '📼',
  },
  {
    char: '🔍',
  },
  {
    char: '🔎',
  },
  {
    char: '🕯️',
  },
  {
    char: '🕯',
  },
  {
    char: '💡',
  },
  {
    char: '🔦',
  },
  {
    char: '🏮',
  },
  {
    char: '🪔',
  },
  {
    char: '📔',
  },
  {
    char: '📕',
  },
  {
    char: '📖',
  },
  {
    char: '📗',
  },
  {
    char: '📘',
  },
  {
    char: '📙',
  },
  {
    char: '📚',
  },
  {
    char: '📓',
  },
  {
    char: '📒',
  },
  {
    char: '📃',
  },
  {
    char: '📜',
  },
  {
    char: '📄',
  },
  {
    char: '📰',
  },
  {
    char: '🗞️',
  },
  {
    char: '🗞',
  },
  {
    char: '📑',
  },
  {
    char: '🔖',
  },
  {
    char: '🏷️',
  },
  {
    char: '🏷',
  },
  {
    char: '💰',
  },
  {
    char: '🪙',
  },
  {
    char: '💴',
  },
  {
    char: '💵',
  },
  {
    char: '💶',
  },
  {
    char: '💷',
  },
  {
    char: '💸',
  },
  {
    char: '💳',
  },
  {
    char: '🧾',
  },
  {
    char: '💹',
  },
  {
    char: '✉️',
  },
  {
    char: '✉',
  },
  {
    char: '📧',
  },
  {
    char: '📨',
  },
  {
    char: '📩',
  },
  {
    char: '📤',
  },
  {
    char: '📥',
  },
  {
    char: '📦',
  },
  {
    char: '📫',
  },
  {
    char: '📪',
  },
  {
    char: '📬',
  },
  {
    char: '📭',
  },
  {
    char: '📮',
  },
  {
    char: '🗳️',
  },
  {
    char: '🗳',
  },
  {
    char: '✏️',
  },
  {
    char: '✏',
  },
  {
    char: '✒️',
  },
  {
    char: '✒',
  },
  {
    char: '🖋️',
  },
  {
    char: '🖋',
  },
  {
    char: '🖊️',
  },
  {
    char: '🖊',
  },
  {
    char: '🖌️',
  },
  {
    char: '🖌',
  },
  {
    char: '🖍️',
  },
  {
    char: '🖍',
  },
  {
    char: '📝',
  },
  {
    char: '💼',
  },
  {
    char: '📁',
  },
  {
    char: '📂',
  },
  {
    char: '🗂️',
  },
  {
    char: '🗂',
  },
  {
    char: '📅',
  },
  {
    char: '📆',
  },
  {
    char: '🗒️',
  },
  {
    char: '🗒',
  },
  {
    char: '🗓️',
  },
  {
    char: '🗓',
  },
  {
    char: '📇',
  },
  {
    char: '📈',
  },
  {
    char: '📉',
  },
  {
    char: '📊',
  },
  {
    char: '📋',
  },
  {
    char: '📌',
  },
  {
    char: '📍',
  },
  {
    char: '📎',
  },
  {
    char: '🖇️',
  },
  {
    char: '🖇',
  },
  {
    char: '📏',
  },
  {
    char: '📐',
  },
  {
    char: '✂️',
  },
  {
    char: '✂',
  },
  {
    char: '🗃️',
  },
  {
    char: '🗃',
  },
  {
    char: '🗄️',
  },
  {
    char: '🗄',
  },
  {
    char: '🗑️',
  },
  {
    char: '🗑',
  },
  {
    char: '🔒',
  },
  {
    char: '🔓',
  },
  {
    char: '🔏',
  },
  {
    char: '🔐',
  },
  {
    char: '🔑',
  },
  {
    char: '🗝️',
  },
  {
    char: '🗝',
  },
  {
    char: '🔨',
  },
  {
    char: '🪓',
  },
  {
    char: '⛏️',
  },
  {
    char: '⛏',
  },
  {
    char: '⚒️',
  },
  {
    char: '⚒',
  },
  {
    char: '🛠️',
  },
  {
    char: '🛠',
  },
  {
    char: '🗡️',
  },
  {
    char: '🗡',
  },
  {
    char: '⚔️',
  },
  {
    char: '⚔',
  },
  {
    char: '🔫',
  },
  {
    char: '🪃',
  },
  {
    char: '🏹',
  },
  {
    char: '🛡️',
  },
  {
    char: '🛡',
  },
  {
    char: '🪚',
  },
  {
    char: '🔧',
  },
  {
    char: '🪛',
  },
  {
    char: '🔩',
  },
  {
    char: '⚙️',
  },
  {
    char: '⚙',
  },
  {
    char: '🗜️',
  },
  {
    char: '🗜',
  },
  {
    char: '⚖️',
  },
  {
    char: '⚖',
  },
  {
    char: '🦯',
  },
  {
    char: '🔗',
  },
  {
    char: '⛓️',
  },
  {
    char: '⛓',
  },
  {
    char: '🪝',
  },
  {
    char: '🧰',
  },
  {
    char: '🧲',
  },
  {
    char: '🪜',
  },
  {
    char: '⚗️',
  },
  {
    char: '⚗',
  },
  {
    char: '🧪',
  },
  {
    char: '🧫',
  },
  {
    char: '🧬',
  },
  {
    char: '🔬',
  },
  {
    char: '🔭',
  },
  {
    char: '📡',
  },
  {
    char: '💉',
  },
  {
    char: '🩸',
  },
  {
    char: '💊',
  },
  {
    char: '🩹',
  },
  {
    char: '🩺',
  },
  {
    char: '🚪',
  },
  {
    char: '🛗',
  },
  {
    char: '🪞',
  },
  {
    char: '🪟',
  },
  {
    char: '🛏️',
  },
  {
    char: '🛏',
  },
  {
    char: '🛋️',
  },
  {
    char: '🛋',
  },
  {
    char: '🪑',
  },
  {
    char: '🚽',
  },
  {
    char: '🪠',
  },
  {
    char: '🚿',
  },
  {
    char: '🛁',
  },
  {
    char: '🪤',
  },
  {
    char: '🪒',
  },
  {
    char: '🧴',
  },
  {
    char: '🧷',
  },
  {
    char: '🧹',
  },
  {
    char: '🧺',
  },
  {
    char: '🧻',
  },
  {
    char: '🪣',
  },
  {
    char: '🧼',
  },
  {
    char: '🪥',
  },
  {
    char: '🧽',
  },
  {
    char: '🧯',
  },
  {
    char: '🛒',
  },
  {
    char: '🚬',
  },
  {
    char: '⚰️',
  },
  {
    char: '⚰',
  },
  {
    char: '🪦',
  },
  {
    char: '⚱️',
  },
  {
    char: '⚱',
  },
  {
    char: '🗿',
  },
  {
    char: '🪧',
  },
  {
    char: '🏧',
  },
  {
    char: '🚮',
  },
  {
    char: '🚰',
  },
  {
    char: '♿',
  },
  {
    char: '🚹',
  },
  {
    char: '🚺',
  },
  {
    char: '🚻',
  },
  {
    char: '🚼',
  },
  {
    char: '🚾',
  },
  {
    char: '🛂',
  },
  {
    char: '🛃',
  },
  {
    char: '🛄',
  },
  {
    char: '🛅',
  },
  {
    char: '⚠️',
  },
  {
    char: '⚠',
  },
  {
    char: '🚸',
  },
  {
    char: '⛔',
  },
  {
    char: '🚫',
  },
  {
    char: '🚳',
  },
  {
    char: '🚭',
  },
  {
    char: '🚯',
  },
  {
    char: '🚱',
  },
  {
    char: '🚷',
  },
  {
    char: '📵',
  },
  {
    char: '🔞',
  },
  {
    char: '☢️',
  },
  {
    char: '☢',
  },
  {
    char: '☣️',
  },
  {
    char: '☣',
  },
  {
    char: '⬆️',
  },
  {
    char: '⬆',
  },
  {
    char: '↗️',
  },
  {
    char: '↗',
  },
  {
    char: '➡️',
  },
  {
    char: '➡',
  },
  {
    char: '↘️',
  },
  {
    char: '↘',
  },
  {
    char: '⬇️',
  },
  {
    char: '⬇',
  },
  {
    char: '↙️',
  },
  {
    char: '↙',
  },
  {
    char: '⬅️',
  },
  {
    char: '⬅',
  },
  {
    char: '↖️',
  },
  {
    char: '↖',
  },
  {
    char: '↕️',
  },
  {
    char: '↕',
  },
  {
    char: '↔️',
  },
  {
    char: '↔',
  },
  {
    char: '↩️',
  },
  {
    char: '↩',
  },
  {
    char: '↪️',
  },
  {
    char: '↪',
  },
  {
    char: '⤴️',
  },
  {
    char: '⤴',
  },
  {
    char: '⤵️',
  },
  {
    char: '⤵',
  },
  {
    char: '🔃',
  },
  {
    char: '🔄',
  },
  {
    char: '🔙',
  },
  {
    char: '🔚',
  },
  {
    char: '🔛',
  },
  {
    char: '🔜',
  },
  {
    char: '🔝',
  },
  {
    char: '🛐',
  },
  {
    char: '⚛️',
  },
  {
    char: '⚛',
  },
  {
    char: '🕉️',
  },
  {
    char: '🕉',
  },
  {
    char: '✡️',
  },
  {
    char: '✡',
  },
  {
    char: '☸️',
  },
  {
    char: '☸',
  },
  {
    char: '☯️',
  },
  {
    char: '☯',
  },
  {
    char: '✝️',
  },
  {
    char: '✝',
  },
  {
    char: '☦️',
  },
  {
    char: '☦',
  },
  {
    char: '☪️',
  },
  {
    char: '☪',
  },
  {
    char: '☮️',
  },
  {
    char: '☮',
  },
  {
    char: '🕎',
  },
  {
    char: '🔯',
  },
  {
    char: '♈',
  },
  {
    char: '♉',
  },
  {
    char: '♊',
  },
  {
    char: '♋',
  },
  {
    char: '♌',
  },
  {
    char: '♍',
  },
  {
    char: '♎',
  },
  {
    char: '♏',
  },
  {
    char: '♐',
  },
  {
    char: '♑',
  },
  {
    char: '♒',
  },
  {
    char: '♓',
  },
  {
    char: '⛎',
  },
  {
    char: '🔀',
  },
  {
    char: '🔁',
  },
  {
    char: '🔂',
  },
  {
    char: '▶️',
  },
  {
    char: '▶',
  },
  {
    char: '⏩',
  },
  {
    char: '⏭️',
  },
  {
    char: '⏭',
  },
  {
    char: '⏯️',
  },
  {
    char: '⏯',
  },
  {
    char: '◀️',
  },
  {
    char: '◀',
  },
  {
    char: '⏪',
  },
  {
    char: '⏮️',
  },
  {
    char: '⏮',
  },
  {
    char: '🔼',
  },
  {
    char: '⏫',
  },
  {
    char: '🔽',
  },
  {
    char: '⏬',
  },
  {
    char: '⏸️',
  },
  {
    char: '⏸',
  },
  {
    char: '⏹️',
  },
  {
    char: '⏹',
  },
  {
    char: '⏺️',
  },
  {
    char: '⏺',
  },
  {
    char: '⏏️',
  },
  {
    char: '⏏',
  },
  {
    char: '🎦',
  },
  {
    char: '🔅',
  },
  {
    char: '🔆',
  },
  {
    char: '📶',
  },
  {
    char: '📳',
  },
  {
    char: '📴',
  },
  {
    char: '♀️',
  },
  {
    char: '♀',
  },
  {
    char: '♂️',
  },
  {
    char: '♂',
  },
  {
    char: '⚧️',
  },
  {
    char: '⚧',
  },
  {
    char: '✖️',
  },
  {
    char: '✖',
  },
  {
    char: '➕',
  },
  {
    char: '➖',
  },
  {
    char: '➗',
  },
  {
    char: '♾️',
  },
  {
    char: '♾',
  },
  {
    char: '‼️',
  },
  {
    char: '‼',
  },
  {
    char: '⁉️',
  },
  {
    char: '⁉',
  },
  {
    char: '❓',
  },
  {
    char: '❔',
  },
  {
    char: '❕',
  },
  {
    char: '❗',
  },
  {
    char: '〰️',
  },
  {
    char: '〰',
  },
  {
    char: '💱',
  },
  {
    char: '💲',
  },
  {
    char: '⚕️',
  },
  {
    char: '⚕',
  },
  {
    char: '♻️',
  },
  {
    char: '♻',
  },
  {
    char: '⚜️',
  },
  {
    char: '⚜',
  },
  {
    char: '🔱',
  },
  {
    char: '📛',
  },
  {
    char: '🔰',
  },
  {
    char: '⭕',
  },
  {
    char: '✅',
  },
  {
    char: '☑️',
  },
  {
    char: '☑',
  },
  {
    char: '✔️',
  },
  {
    char: '✔',
  },
  {
    char: '❌',
  },
  {
    char: '❎',
  },
  {
    char: '➰',
  },
  {
    char: '➿',
  },
  {
    char: '〽️',
  },
  {
    char: '〽',
  },
  {
    char: '✳️',
  },
  {
    char: '✳',
  },
  {
    char: '✴️',
  },
  {
    char: '✴',
  },
  {
    char: '❇️',
  },
  {
    char: '❇',
  },
  {
    char: '©️',
  },
  {
    char: '©',
  },
  {
    char: '®️',
  },
  {
    char: '®',
  },
  {
    char: '™️',
  },
  {
    char: '™',
  },
  {
    char: '#️⃣',
  },
  {
    char: '#⃣',
  },
  {
    char: '*️⃣',
  },
  {
    char: '*⃣',
  },
  {
    char: '0️⃣',
  },
  {
    char: '0⃣',
  },
  {
    char: '1️⃣',
  },
  {
    char: '1⃣',
  },
  {
    char: '2️⃣',
  },
  {
    char: '2⃣',
  },
  {
    char: '3️⃣',
  },
  {
    char: '3⃣',
  },
  {
    char: '4️⃣',
  },
  {
    char: '4⃣',
  },
  {
    char: '5️⃣',
  },
  {
    char: '5⃣',
  },
  {
    char: '6️⃣',
  },
  {
    char: '6⃣',
  },
  {
    char: '7️⃣',
  },
  {
    char: '7⃣',
  },
  {
    char: '8️⃣',
  },
  {
    char: '8⃣',
  },
  {
    char: '9️⃣',
  },
  {
    char: '9⃣',
  },
  {
    char: '🔟',
  },
  {
    char: '🔠',
  },
  {
    char: '🔡',
  },
  {
    char: '🔢',
  },
  {
    char: '🔣',
  },
  {
    char: '🔤',
  },
  {
    char: '🅰️',
  },
  {
    char: '🅰',
  },
  {
    char: '🆎',
  },
  {
    char: '🅱️',
  },
  {
    char: '🅱',
  },
  {
    char: '🆑',
  },
  {
    char: '🆒',
  },
  {
    char: '🆓',
  },
  {
    char: 'ℹ️',
  },
  {
    char: 'ℹ',
  },
  {
    char: '🆔',
  },
  {
    char: 'Ⓜ️',
  },
  {
    char: 'Ⓜ',
  },
  {
    char: '🆕',
  },
  {
    char: '🆖',
  },
  {
    char: '🅾️',
  },
  {
    char: '🅾',
  },
  {
    char: '🆗',
  },
  {
    char: '🅿️',
  },
  {
    char: '🅿',
  },
  {
    char: '🆘',
  },
  {
    char: '🆙',
  },
  {
    char: '🆚',
  },
  {
    char: '🈁',
  },
  {
    char: '🈂️',
  },
  {
    char: '🈂',
  },
  {
    char: '🈷️',
  },
  {
    char: '🈷',
  },
  {
    char: '🈶',
  },
  {
    char: '🈯',
  },
  {
    char: '🉐',
  },
  {
    char: '🈹',
  },
  {
    char: '🈚',
  },
  {
    char: '🈲',
  },
  {
    char: '🉑',
  },
  {
    char: '🈸',
  },
  {
    char: '🈴',
  },
  {
    char: '🈳',
  },
  {
    char: '㊗️',
  },
  {
    char: '㊗',
  },
  {
    char: '㊙️',
  },
  {
    char: '㊙',
  },
  {
    char: '🈺',
  },
  {
    char: '🈵',
  },
  {
    char: '🔴',
  },
  {
    char: '🟠',
  },
  {
    char: '🟡',
  },
  {
    char: '🟢',
  },
  {
    char: '🔵',
  },
  {
    char: '🟣',
  },
  {
    char: '🟤',
  },
  {
    char: '⚫',
  },
  {
    char: '⚪',
  },
  {
    char: '🟥',
  },
  {
    char: '🟧',
  },
  {
    char: '🟨',
  },
  {
    char: '🟩',
  },
  {
    char: '🟦',
  },
  {
    char: '🟪',
  },
  {
    char: '🟫',
  },
  {
    char: '⬛',
  },
  {
    char: '⬜',
  },
  {
    char: '◼️',
  },
  {
    char: '◼',
  },
  {
    char: '◻️',
  },
  {
    char: '◻',
  },
  {
    char: '◾',
  },
  {
    char: '◽',
  },
  {
    char: '▪️',
  },
  {
    char: '▪',
  },
  {
    char: '▫️',
  },
  {
    char: '▫',
  },
  {
    char: '🔶',
  },
  {
    char: '🔷',
  },
  {
    char: '🔸',
  },
  {
    char: '🔹',
  },
  {
    char: '🔺',
  },
  {
    char: '🔻',
  },
  {
    char: '💠',
  },
  {
    char: '🔘',
  },
  {
    char: '🔳',
  },
  {
    char: '🔲',
  },
  {
    char: '🏁',
  },
  {
    char: '🚩',
  },
  {
    char: '🎌',
  },
  {
    char: '🏴',
  },
  {
    char: '🏳️',
  },
  {
    char: '🏳',
  },
  {
    char: '🏳️‍🌈',
  },
  {
    char: '🏳‍🌈',
  },
  {
    char: '🏳️‍⚧️',
  },
  {
    char: '🏳‍⚧️',
  },
  {
    char: '🏳️‍⚧',
  },
  {
    char: '🏳‍⚧',
  },
  {
    char: '🏴‍☠️',
  },
  {
    char: '🏴‍☠',
  },
  {
    char: '🇦🇨',
  },
  {
    char: '🇦🇩',
  },
  {
    char: '🇦🇪',
  },
  {
    char: '🇦🇫',
  },
  {
    char: '🇦🇬',
  },
  {
    char: '🇦🇮',
  },
  {
    char: '🇦🇱',
  },
  {
    char: '🇦🇲',
  },
  {
    char: '🇦🇴',
  },
  {
    char: '🇦🇶',
  },
  {
    char: '🇦🇷',
  },
  {
    char: '🇦🇸',
  },
  {
    char: '🇦🇹',
  },
  {
    char: '🇦🇺',
  },
  {
    char: '🇦🇼',
  },
  {
    char: '🇦🇽',
  },
  {
    char: '🇦🇿',
  },
  {
    char: '🇧🇦',
  },
  {
    char: '🇧🇧',
  },
  {
    char: '🇧🇩',
  },
  {
    char: '🇧🇪',
  },
  {
    char: '🇧🇫',
  },
  {
    char: '🇧🇬',
  },
  {
    char: '🇧🇭',
  },
  {
    char: '🇧🇮',
  },
  {
    char: '🇧🇯',
  },
  {
    char: '🇧🇱',
  },
  {
    char: '🇧🇲',
  },
  {
    char: '🇧🇳',
  },
  {
    char: '🇧🇴',
  },
  {
    char: '🇧🇶',
  },
  {
    char: '🇧🇷',
  },
  {
    char: '🇧🇸',
  },
  {
    char: '🇧🇹',
  },
  {
    char: '🇧🇻',
  },
  {
    char: '🇧🇼',
  },
  {
    char: '🇧🇾',
  },
  {
    char: '🇧🇿',
  },
  {
    char: '🇨🇦',
  },
  {
    char: '🇨🇨',
  },
  {
    char: '🇨🇩',
  },
  {
    char: '🇨🇫',
  },
  {
    char: '🇨🇬',
  },
  {
    char: '🇨🇭',
  },
  {
    char: '🇨🇮',
  },
  {
    char: '🇨🇰',
  },
  {
    char: '🇨🇱',
  },
  {
    char: '🇨🇲',
  },
  {
    char: '🇨🇳',
  },
  {
    char: '🇨🇴',
  },
  {
    char: '🇨🇵',
  },
  {
    char: '🇨🇷',
  },
  {
    char: '🇨🇺',
  },
  {
    char: '🇨🇻',
  },
  {
    char: '🇨🇼',
  },
  {
    char: '🇨🇽',
  },
  {
    char: '🇨🇾',
  },
  {
    char: '🇨🇿',
  },
  {
    char: '🇩🇪',
  },
  {
    char: '🇩🇬',
  },
  {
    char: '🇩🇯',
  },
  {
    char: '🇩🇰',
  },
  {
    char: '🇩🇲',
  },
  {
    char: '🇩🇴',
  },
  {
    char: '🇩🇿',
  },
  {
    char: '🇪🇦',
  },
  {
    char: '🇪🇨',
  },
  {
    char: '🇪🇪',
  },
  {
    char: '🇪🇬',
  },
  {
    char: '🇪🇭',
  },
  {
    char: '🇪🇷',
  },
  {
    char: '🇪🇸',
  },
  {
    char: '🇪🇹',
  },
  {
    char: '🇪🇺',
  },
  {
    char: '🇫🇮',
  },
  {
    char: '🇫🇯',
  },
  {
    char: '🇫🇰',
  },
  {
    char: '🇫🇲',
  },
  {
    char: '🇫🇴',
  },
  {
    char: '🇫🇷',
  },
  {
    char: '🇬🇦',
  },
  {
    char: '🇬🇧',
  },
  {
    char: '🇬🇩',
  },
  {
    char: '🇬🇪',
  },
  {
    char: '🇬🇫',
  },
  {
    char: '🇬🇬',
  },
  {
    char: '🇬🇭',
  },
  {
    char: '🇬🇮',
  },
  {
    char: '🇬🇱',
  },
  {
    char: '🇬🇲',
  },
  {
    char: '🇬🇳',
  },
  {
    char: '🇬🇵',
  },
  {
    char: '🇬🇶',
  },
  {
    char: '🇬🇷',
  },
  {
    char: '🇬🇸',
  },
  {
    char: '🇬🇹',
  },
  {
    char: '🇬🇺',
  },
  {
    char: '🇬🇼',
  },
  {
    char: '🇬🇾',
  },
  {
    char: '🇭🇰',
  },
  {
    char: '🇭🇲',
  },
  {
    char: '🇭🇳',
  },
  {
    char: '🇭🇷',
  },
  {
    char: '🇭🇹',
  },
  {
    char: '🇭🇺',
  },
  {
    char: '🇮🇨',
  },
  {
    char: '🇮🇩',
  },
  {
    char: '🇮🇪',
  },
  {
    char: '🇮🇱',
  },
  {
    char: '🇮🇲',
  },
  {
    char: '🇮🇳',
  },
  {
    char: '🇮🇴',
  },
  {
    char: '🇮🇶',
  },
  {
    char: '🇮🇷',
  },
  {
    char: '🇮🇸',
  },
  {
    char: '🇮🇹',
  },
  {
    char: '🇯🇪',
  },
  {
    char: '🇯🇲',
  },
  {
    char: '🇯🇴',
  },
  {
    char: '🇯🇵',
  },
  {
    char: '🇰🇪',
  },
  {
    char: '🇰🇬',
  },
  {
    char: '🇰🇭',
  },
  {
    char: '🇰🇮',
  },
  {
    char: '🇰🇲',
  },
  {
    char: '🇰🇳',
  },
  {
    char: '🇰🇵',
  },
  {
    char: '🇰🇷',
  },
  {
    char: '🇰🇼',
  },
  {
    char: '🇰🇾',
  },
  {
    char: '🇰🇿',
  },
  {
    char: '🇱🇦',
  },
  {
    char: '🇱🇧',
  },
  {
    char: '🇱🇨',
  },
  {
    char: '🇱🇮',
  },
  {
    char: '🇱🇰',
  },
  {
    char: '🇱🇷',
  },
  {
    char: '🇱🇸',
  },
  {
    char: '🇱🇹',
  },
  {
    char: '🇱🇺',
  },
  {
    char: '🇱🇻',
  },
  {
    char: '🇱🇾',
  },
  {
    char: '🇲🇦',
  },
  {
    char: '🇲🇨',
  },
  {
    char: '🇲🇩',
  },
  {
    char: '🇲🇪',
  },
  {
    char: '🇲🇫',
  },
  {
    char: '🇲🇬',
  },
  {
    char: '🇲🇭',
  },
  {
    char: '🇲🇰',
  },
  {
    char: '🇲🇱',
  },
  {
    char: '🇲🇲',
  },
  {
    char: '🇲🇳',
  },
  {
    char: '🇲🇴',
  },
  {
    char: '🇲🇵',
  },
  {
    char: '🇲🇶',
  },
  {
    char: '🇲🇷',
  },
  {
    char: '🇲🇸',
  },
  {
    char: '🇲🇹',
  },
  {
    char: '🇲🇺',
  },
  {
    char: '🇲🇻',
  },
  {
    char: '🇲🇼',
  },
  {
    char: '🇲🇽',
  },
  {
    char: '🇲🇾',
  },
  {
    char: '🇲🇿',
  },
  {
    char: '🇳🇦',
  },
  {
    char: '🇳🇨',
  },
  {
    char: '🇳🇪',
  },
  {
    char: '🇳🇫',
  },
  {
    char: '🇳🇬',
  },
  {
    char: '🇳🇮',
  },
  {
    char: '🇳🇱',
  },
  {
    char: '🇳🇴',
  },
  {
    char: '🇳🇵',
  },
  {
    char: '🇳🇷',
  },
  {
    char: '🇳🇺',
  },
  {
    char: '🇳🇿',
  },
  {
    char: '🇴🇲',
  },
  {
    char: '🇵🇦',
  },
  {
    char: '🇵🇪',
  },
  {
    char: '🇵🇫',
  },
  {
    char: '🇵🇬',
  },
  {
    char: '🇵🇭',
  },
  {
    char: '🇵🇰',
  },
  {
    char: '🇵🇱',
  },
  {
    char: '🇵🇲',
  },
  {
    char: '🇵🇳',
  },
  {
    char: '🇵🇷',
  },
  {
    char: '🇵🇸',
  },
  {
    char: '🇵🇹',
  },
  {
    char: '🇵🇼',
  },
  {
    char: '🇵🇾',
  },
  {
    char: '🇶🇦',
  },
  {
    char: '🇷🇪',
  },
  {
    char: '🇷🇴',
  },
  {
    char: '🇷🇸',
  },
  {
    char: '🇷🇺',
  },
  {
    char: '🇷🇼',
  },
  {
    char: '🇸🇦',
  },
  {
    char: '🇸🇧',
  },
  {
    char: '🇸🇨',
  },
  {
    char: '🇸🇩',
  },
  {
    char: '🇸🇪',
  },
  {
    char: '🇸🇬',
  },
  {
    char: '🇸🇭',
  },
  {
    char: '🇸🇮',
  },
  {
    char: '🇸🇯',
  },
  {
    char: '🇸🇰',
  },
  {
    char: '🇸🇱',
  },
  {
    char: '🇸🇲',
  },
  {
    char: '🇸🇳',
  },
  {
    char: '🇸🇴',
  },
  {
    char: '🇸🇷',
  },
  {
    char: '🇸🇸',
  },
  {
    char: '🇸🇹',
  },
  {
    char: '🇸🇻',
  },
  {
    char: '🇸🇽',
  },
  {
    char: '🇸🇾',
  },
  {
    char: '🇸🇿',
  },
  {
    char: '🇹🇦',
  },
  {
    char: '🇹🇨',
  },
  {
    char: '🇹🇩',
  },
  {
    char: '🇹🇫',
  },
  {
    char: '🇹🇬',
  },
  {
    char: '🇹🇭',
  },
  {
    char: '🇹🇯',
  },
  {
    char: '🇹🇰',
  },
  {
    char: '🇹🇱',
  },
  {
    char: '🇹🇲',
  },
  {
    char: '🇹🇳',
  },
  {
    char: '🇹🇴',
  },
  {
    char: '🇹🇷',
  },
  {
    char: '🇹🇹',
  },
  {
    char: '🇹🇻',
  },
  {
    char: '🇹🇼',
  },
  {
    char: '🇹🇿',
  },
  {
    char: '🇺🇦',
  },
  {
    char: '🇺🇬',
  },
  {
    char: '🇺🇲',
  },
  {
    char: '🇺🇳',
  },
  {
    char: '🇺🇸',
  },
  {
    char: '🇺🇾',
  },
  {
    char: '🇺🇿',
  },
  {
    char: '🇻🇦',
  },
  {
    char: '🇻🇨',
  },
  {
    char: '🇻🇪',
  },
  {
    char: '🇻🇬',
  },
  {
    char: '🇻🇮',
  },
  {
    char: '🇻🇳',
  },
  {
    char: '🇻🇺',
  },
  {
    char: '🇼🇫',
  },
  {
    char: '🇼🇸',
  },
  {
    char: '🇽🇰',
  },
  {
    char: '🇾🇪',
  },
  {
    char: '🇾🇹',
  },
  {
    char: '🇿🇦',
  },
  {
    char: '🇿🇲',
  },
  {
    char: '🇿🇼',
  },
  {
    char: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  },
  {
    char: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  },
  {
    char: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
  },
];
