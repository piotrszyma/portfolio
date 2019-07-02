PWD=`pwd`
yarn build
git clone git@github.com:piotrszyma/piotrszyma.github.io.git ../page-folder
rm -rf ../page-folder/*
cp -r dist/* ../page-folder
cd ../page-folder
git add --all
git commit -m "Page update"
git push origin master
cd $PWD
rm -rf ../page-folder