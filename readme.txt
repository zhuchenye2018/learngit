Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.


ѧϰ���

�����汾�⣺

mkdir learngit;
cd learngit;
pwd;//��ʾĿ¼��ַ��Ŀ¼�������ģ�

git init;//Ŀ¼��ɲֿ��ʼ����

�ļ���Ӱ汾�⣺

����ŵ�learngitĿ¼
��������window�ļ��±��༭��

git add readme.txt.//�ļ���ӵ�����⡣

git commit -m"xxx"//�ύ���⡣

git status//�ļ���ǰת̬��Ҫ��ʱ���չ�������״̬

�޸�̬change,û����ӹ�Untracked.

git diff//�鿴�޸ĵ����ݡ�

�鿴��ʷ��¼


git log//�鿴��ʷ��¼��

git log--pretty=oneline//�����

����

git reset --hard HEAD^.//����Ҫ�ҵ��İ汾��

�Ⱥ����ٷ���

������ڵ�gitIDֵ��

git reflog//��ʾ������ʷ��¼���ص�����ں�������ʹ�á�

HEADָ��İ汾���ǵ�ǰ�汾
git reset --hard commit_id

�����������޸�

git checkout --file//�������������޸ġ�//�ļ��ص����һ��git commit��git addʱ��״̬

stage�����������޸�

git reset HEAD file//

ɾ���ı�

git rm file//ɾ���ļ���


gitHubԶ�ֿ̲��ʹ�á�

git remote add origin//����Զ�̿�

git remote remove origin//ȡ������

git push -u origin master//���ؿ����͵�Զ�̿⡣

��¡Զ�̿�


git clone ssh��ַ��

��֧�Ľ����ͺϲ�

git checkout -b dev//����һ����dev�ķ�֧��




