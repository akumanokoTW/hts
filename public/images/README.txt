您可以將真實照片直接放入此目錄中：

推薦結構範例：
public/images/
  ├── pr/         (放入公關組照片，如 pr-1.jpg, pr-2.jpg)
  ├── design/     (放入美宣組照片，如 design-1.jpg, design-2.jpg)
  ├── teaching/   (放入教學組照片，如 teaching-1.jpg, teaching-2.jpg)
  ├── activity/   (放入活動組照片，如 activity-1.jpg, activity-2.jpg)
  ├── living/     (放入生活組照片，如 living-1.jpg, living-2.jpg)
  └── counselor/  (放入隊輔組照片，如 counselor-1.jpg, counselor-2.jpg)

放入後，在 src/data/campData.js 中的 photos 陣列只要填寫相對路徑即可，例如：
photos: [
  "/images/teaching/teaching-1.jpg",
  "/images/teaching/teaching-2.jpg"
]
