import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './modules/post/post-list/post-list.component';
import { PostFormComponent } from './modules/post/post-form/post-form.component';
import { PostDetailComponent } from './modules/post/post-detail/post-detail.component';
import { UserListComponent } from './modules/user/user-list/user-list.component';
import { UserFormComponent } from './modules/user/user-form/user-form.component';
import { UserDetailComponent } from './modules/user/user-detail/user-detail.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'posts', component: PostListComponent},
    {path: 'posts/new', component: PostFormComponent},
    {path: 'posts/edit/:id', component: PostFormComponent},
    {path: 'posts/:id', component:PostDetailComponent},
    {path: 'users', component: UserListComponent},
    {path: 'users/new', component:UserFormComponent},
    {path: 'users/edit/:id', component: UserFormComponent},
    {path: 'users/:id', component: UserDetailComponent},
    {path: '', redirectTo: '/posts', pathMatch: 'full'},
    {path: '**', redirectTo: '/posts'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
