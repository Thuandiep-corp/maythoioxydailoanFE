## Khởi tạo dự án

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


## Quy trình làm việc

1. Quy trình làm việc với tính năm project của git hub:
- Bước 1: leader tạo các issues (task) ở cột backlog
- Bước 2: những thành viên có task dược assign sẽ nhận công việc và kéo qua cột todo
- Bước 3: khi bắt đầu làm 1 task, kéo task đó qua cột In progress và tạo nhánh feature của riêng mình
- Bước 4: khi hoàn tất 1 task, kéo task đó qua cột In review, tại pull request và báo lại leader
- Bước 5: khi leader accept task, keo task đó qua cột Done

2. Các branch của git:
- Master (main): nhánh chứa code demo khác hàng
- Develop: Nhánh chính chứa code đang trong quá trình phát triển, mỗi khi nhận 1 issue mới, các thành viên pull code từ nhánh này về để tạo nhánh feature riêng của mình
- Feature: nhánh làm việc (mỗi issue được giao sẽ tương đương với 1 nhánh feature) và mỗi thành viên chỉ được làm việc trên 1 nhánh feature trong cùng 1 thời điểm.

3. Các command của git:
- git checkout <tên nhánh> (chuyển nhánh)
- git checkout -b <tên nhánh> (tạo nhánh mới từ nhánh đang mở)
- git pull origin <tên nhánh> (pull code từ nhánh đang mở)
- git add . (add file về git)
- git commit -m "<một tập tin>" (commit code về git)
- git push origin <tên nhánh> (push code về nhánh master)

    ![alt text](/public/image.png)

4. xử lý conflict:
- Bước 1: về lại nhánh develop (hoặc nhánh sẽ nhận code)
- Bước 2: pull code mới nhất của nhánh develop về
- Bước 3: trở lại nhánh mình muốn tạo request
- Bước 4: dùng lệnh git rebase orgin/<tên nhánh> (ví dụ develop sẽ là git rebase origin/develop)
- bước 5: dùng lệnh git status để xem conflict
- Bước 6: dùng lệnh git add . (add file về git)
- Bước 7: dùng lệnh git rebase --continue để xem còn conflict hay không
- Nếu còn conflict, quay lại bước 5
- Bước 8: dùng lệnh git add . (add file về git)
- Bước 9: dùng lệnh git commit -m "<một tập tin>" (commit code về git)
- Bước 10: dùng lệnh git push và hoàn tất công việc

5. các công thức cơ bản:
- Công thức tạo tên nhánh bao gồm:
```
<type>/<tag>-<title>
Giải thích:
<type> là loại công việc mà nhánh đảm nhân
<tag> là số tag của issue (task) mà mình đang làm ở mục in progress
<title> là tên issue (task) mà mình đang làm ở mucus in progress
Ví dụ: tôi được giao làm task số 2 có type là feature với tên mô tả là tạo header cho trang web
thì kết quả sẽ là: 'feature/2-create-header'
```
- Các loại type cơ bản:

    ![alt text](/public/image-1.png)


- Công thức tạo commit message và pull request bao gồm:
```
<word-type>: <description> #<tag-number>
Giải thích:
<word-type>: là việc mình đã làm, phân chia thành các loại khác nhau (như hình bên dưới)
<description>: mô tả công việc mình đã làm trong commit (dưới 80 kí tự)
<tag-number>: số thứ tự tag của issue (task) mà mình đang làm ở mục in progress
Ví dụ: tôi phát triển tính năng header có số tag trong project là 2
Thì kết quả sẽ là: 'feat: create header #2'
```
- Các loại word-type cơ bản:
    + feat: Thêm tính năng mới (A new feature)
    + fix: Sửa lỗi (A bug fix)
    + docs: Chỉ thay đổi tài liệu (Documentation only changes)
    + style: Thay đổi không ảnh hưởng logic code (format, dấu ;, spacing, v.v.) (Changes that do not affect the meaning of the code)
    + refactor: Tái cấu trúc code, không sửa lỗi và không thêm tính năng (Neither fixes a bug nor adds a feature)
    + perf: Tối ưu hiệu năng (Improves performance)
    + test: Thêm/điều chỉnh test còn thiếu (Adding missing tests)
    + chore: Việc lặt vặt/build tools/phụ trợ, như cấu hình, scripts, lib, generate docs… (Changes to build process or auxiliary tools/libraries)


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
